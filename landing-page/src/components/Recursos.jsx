import { Icone } from './Icone';

export function Recursos({ itens }) {
  return (
    <section id="recursos" className="secao">
      <div className="container">
        <div className="secao-titulo">
          <span className="selo">Recursos</span>
          <h2>Tudo o que a loja precisa para não perder um pedido</h2>
        </div>
        <div className="grade-recursos">
          {itens.map((item) => (
            <article key={item.titulo} className="cartao">
              <div className="cartao-icone"><Icone nome={item.icone} /></div>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
