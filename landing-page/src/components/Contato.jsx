import { useState } from 'react';
import { Icone } from './Icone';

const VAZIO = { nome: '', email: '', telefone: '', mensagem: '', site: '' };

// Formulário de contato: envia para a Netlify Function em netlify/functions/enviar-email.mjs
export function Contato({ info }) {
  const [dados, setDados] = useState(VAZIO);
  const [estado, setEstado] = useState({ tipo: '', texto: '' }); // tipo: enviando | sucesso | erro

  const alterar = (e) => setDados({ ...dados, [e.target.name]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    if (!dados.nome.trim() || !dados.email.trim() || !dados.mensagem.trim()) {
      return setEstado({ tipo: 'erro', texto: 'Preencha nome, e-mail e mensagem.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email.trim())) {
      return setEstado({ tipo: 'erro', texto: 'Digite um e-mail válido.' });
    }

    setEstado({ tipo: 'enviando', texto: 'Enviando...' });
    try {
      const resposta = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });
      const retorno = await resposta.json().catch(() => ({}));
      if (!resposta.ok) throw new Error(retorno.erro || 'Não foi possível enviar.');
      setEstado({ tipo: 'sucesso', texto: 'Mensagem enviada! Responderemos em breve.' });
      setDados(VAZIO);
    } catch (erro) {
      setEstado({ tipo: 'erro', texto: erro.message || 'Não foi possível enviar. Tente novamente.' });
    }
  };

  return (
    <section id="contato" className="secao">
      <div className="container contato-grade">
        <div className="contato-info">
          <span className="selo">Contato</span>
          <h2>Vamos conversar?</h2>
          <p>Conte como sua loja controla os pedidos hoje e mostramos como o OnStock pode ajudar.</p>
          <ul>
            <li><Icone nome="email" /> {info.email}</li>
            <li><Icone nome="local" /> {info.cidade}</li>
            <li><Icone nome="relogio" /> {info.horario}</li>
          </ul>
        </div>

        <form className="formulario" onSubmit={enviar} noValidate>
          <div className="campo">
            <label htmlFor="nome">Nome *</label>
            <input id="nome" name="nome" value={dados.nome} onChange={alterar} maxLength={100} autoComplete="name" required />
          </div>
          <div className="campos-lado">
            <div className="campo">
              <label htmlFor="email">E-mail *</label>
              <input id="email" name="email" type="email" value={dados.email} onChange={alterar} maxLength={150} autoComplete="email" required />
            </div>
            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" name="telefone" type="tel" value={dados.telefone} onChange={alterar} maxLength={20} autoComplete="tel" />
            </div>
          </div>
          <div className="campo">
            <label htmlFor="mensagem">Mensagem *</label>
            <textarea id="mensagem" name="mensagem" rows={5} value={dados.mensagem} onChange={alterar} maxLength={2000} required />
          </div>
          {/* Campo escondido contra robôs: pessoas não veem nem preenchem */}
          <input className="escondido" name="site" value={dados.site} onChange={alterar} tabIndex={-1} autoComplete="off" aria-hidden="true" />

          {estado.texto && (
            <p className={`aviso aviso-${estado.tipo}`} role={estado.tipo === 'erro' ? 'alert' : 'status'}>{estado.texto}</p>
          )}
          <button type="submit" className="botao botao-largo" disabled={estado.tipo === 'enviando'}>
            {estado.tipo === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}
