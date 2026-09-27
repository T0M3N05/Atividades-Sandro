export function Footer({ copyrightText }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}