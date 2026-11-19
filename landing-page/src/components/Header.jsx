import { useState } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Icone } from './Icone';

export function Header({ nome, links }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <Logo nome={nome} />
        <button
          type="button"
          className="menu-botao"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <Icone nome={menuAberto ? 'fechar' : 'menu'} />
        </button>
        <Navigation links={links} aberto={menuAberto} aoClicar={() => setMenuAberto(false)} />
        <a href="#contato" className="botao botao-pequeno header-cta">Fale conosco</a>
      </div>
    </header>
  );
}
