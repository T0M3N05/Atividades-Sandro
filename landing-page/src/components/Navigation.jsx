export function Navigation({ links, aberto, aoClicar }) {
  return (
    <nav className={`site-nav ${aberto ? 'aberto' : ''}`} aria-label="Navegação principal">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url} onClick={aoClicar}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
