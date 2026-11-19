// Netlify Function: recebe o formulário de contato e envia o e-mail pela API da Brevo.
// Variáveis (Netlify > Site configuration > Environment variables):
//   BREVO_API_KEY    chave da API da Brevo
//   EMAIL_REMETENTE  e-mail verificado como remetente na Brevo
//   EMAIL_DESTINO    quem recebe (teste com o SEU e-mail; na entrega, o do professor)

const resposta = (status, corpo) => ({
  statusCode: status,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(corpo),
});

const escapar = (texto) =>
  String(texto).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return resposta(405, { erro: 'Método não permitido.' });

  let dados;
  try {
    dados = JSON.parse(event.body || '{}');
  } catch {
    return resposta(400, { erro: 'Dados inválidos.' });
  }

  // Robô preencheu o campo escondido: finge que deu certo e não envia nada
  if (dados.site) return resposta(200, { ok: true });

  const nome = String(dados.nome ?? '').trim().slice(0, 100);
  const email = String(dados.email ?? '').trim().slice(0, 150);
  const telefone = String(dados.telefone ?? '').trim().slice(0, 20);
  const mensagem = String(dados.mensagem ?? '').trim().slice(0, 2000);

  if (!nome || !email || !mensagem) return resposta(400, { erro: 'Preencha nome, e-mail e mensagem.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return resposta(400, { erro: 'Digite um e-mail válido.' });

  const { BREVO_API_KEY, EMAIL_REMETENTE, EMAIL_DESTINO } = process.env;
  if (!BREVO_API_KEY || !EMAIL_REMETENTE || !EMAIL_DESTINO) {
    console.error('Faltam variáveis de ambiente: BREVO_API_KEY, EMAIL_REMETENTE ou EMAIL_DESTINO.');
    return resposta(500, { erro: 'O envio de e-mail não está configurado.' });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;color:#1e293b">
      <h2 style="color:#2C3B4E">Nova mensagem pelo site OnStock</h2>
      <p><b>Nome:</b> ${escapar(nome)}</p>
      <p><b>E-mail:</b> ${escapar(email)}</p>
      <p><b>Telefone:</b> ${escapar(telefone || '-')}</p>
      <p><b>Mensagem:</b></p>
      <p style="white-space:pre-wrap;background:#f5f6f8;padding:12px;border-radius:8px">${escapar(mensagem)}</p>
    </div>`;

  try {
    const envio = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Site OnStock', email: EMAIL_REMETENTE },
        to: [{ email: EMAIL_DESTINO }],
        replyTo: { email, name: nome }, // "Responder" no e-mail vai direto para quem preencheu
        subject: `Contato pelo site: ${nome}`,
        htmlContent: html,
        textContent: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || '-'}\n\n${mensagem}`,
      }),
    });
    if (!envio.ok) {
      console.error('Brevo recusou o envio:', envio.status, await envio.text());
      return resposta(502, { erro: 'Não foi possível enviar agora. Tente novamente mais tarde.' });
    }
    return resposta(200, { ok: true });
  } catch (erro) {
    console.error('Erro ao chamar a Brevo:', erro);
    return resposta(502, { erro: 'Não foi possível enviar agora. Tente novamente mais tarde.' });
  }
};
