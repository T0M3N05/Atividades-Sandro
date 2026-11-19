export function ComoFunciona({ passos }) {
  return (
    <section id="como-funciona" className="secao secao-clara">
      <div className="container">
        <div className="secao-titulo">
          <span className="selo">Como funciona</span>
          <h2>Três passos do pedido até a entrega</h2>
        </div>
        <ol className="passos">
          {passos.map((passo) => (
            <li key={passo.numero} className="passo">
              <span className="passo-numero">{passo.numero}</span>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
