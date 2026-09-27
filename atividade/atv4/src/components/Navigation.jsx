export function Navigation({ links }) {
  return (
    <nav className="site-nav" aria-label="Navegação Principal">
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}