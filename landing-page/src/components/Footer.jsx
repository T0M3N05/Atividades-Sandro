import { Logo } from './Logo';

export function Footer({ nome, links, info }) {
  const ano = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grade">
        <div className="footer-marca">
          <Logo nome={nome} />
          <p>Controle de pedidos para lojas: do balcão até a entrega.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            {links.map((link) => <li key={link.url}><a href={link.url}>{link.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href={`mailto:${info.email}`}>{info.email}</a></li>
            <li>{info.cidade}</li>
            <li>{info.horario}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {ano} {nome}. Todos os direitos reservados.</p>
        <p>Projeto acadêmico, UNIPAR</p>
      </div>
    </footer>
  );
}
