# Landing Page OnStock: Atividade do Bimestre (Prof. Sandro)

Landing page em React + Vite com formulário de contato que envia e-mail por **Netlify Functions** (API da Brevo).

## Rodar no PC
```
npm install
npm run dev
```
Para testar o envio de e-mail no PC: `npm install -g netlify-cli`, copie `.env.example` para `.env`, preencha e rode `netlify dev`.

## Componentes (`src/components`)
Header, Navigation (menu responsivo), Logo, Hero, Recursos, ComoFunciona, Chamada, **Contato** (formulário) e **Footer**.
Os textos ficam em `src/dados.js`.

## Função de e-mail
`netlify/functions/enviar-email.mjs`: o formulário chama `/api/enviar-email` (redirecionado no `netlify.toml`).
Valida os campos, bloqueia robôs (campo escondido) e envia pela Brevo com "responder para" o e-mail de quem preencheu.

## Publicar no Netlify
1. Netlify > **Add new site > Import an existing project > GitHub** > escolha o repositório.
2. **Base directory:** `landing-page` (o resto o `netlify.toml` já configura).
3. **Site configuration > Environment variables:** `BREVO_API_KEY`, `EMAIL_REMETENTE` e `EMAIL_DESTINO`.
4. Faça um novo deploy depois de criar as variáveis.

> `EMAIL_DESTINO`: teste com o **seu** e-mail. Só na entrega troque para `sandro.ramos@prof.unipar.br` e faça um novo deploy, **sem testar de novo**.
