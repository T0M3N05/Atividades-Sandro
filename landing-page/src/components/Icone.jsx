// Ícones em SVG usados na página
const caminhos = {
  upload: 'M12 16V4m0 0l-5 5m5-5l5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3',
  relogio: 'M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z',
  check: 'M9 12l2 2 4-4M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z',
  carrinho: 'M3 4h2l2.4 10.2a1 1 0 001 .8h8.9a1 1 0 001-.8L20 7H6.2M9 20h.01M17 20h.01',
  caixa: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm-8 4.5l8 4.5 8-4.5M12 12v9',
  usuarios: 'M16 20v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8zm13 9v-1a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8',
  email: 'M4 6h16v12H4zm0 0l8 7 8-7',
  local: 'M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  fechar: 'M6 6l12 12M18 6L6 18',
};

export function Icone({ nome, tamanho = 24 }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={caminhos[nome]} />
    </svg>
  );
}
