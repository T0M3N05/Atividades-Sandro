export function Header({ title }) {
  return (
    <header className="site-header">
      <div className="container header-container">
        <h1 className="logo">{title}</h1>
      </div>
    </header>
  );
}