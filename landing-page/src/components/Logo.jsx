import { Icone } from './Icone';

export function Logo({ nome }) {
  return (
    <a href="#inicio" className="logo" aria-label={`${nome}, voltar ao início`}>
      <span className="logo-icone"><Icone nome="caixa" tamanho={22} /></span>
      {nome}
    </a>
  );
}
