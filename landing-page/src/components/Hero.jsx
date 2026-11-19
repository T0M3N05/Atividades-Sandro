export function Hero({ titulo, subtitulo }) {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container">
        <div className="hero-texto">
          <span className="selo">Controle de pedidos para lojas</span>
          <h1>{titulo}</h1>
          <p>{subtitulo}</p>
          <div className="hero-botoes">
            <a href="#contato" className="botao">Quero conhecer</a>
            <a href="#como-funciona" className="botao botao-contorno">Como funciona</a>
          </div>
        </div>

        {/* Prévia ilustrativa do painel */}
        <div className="hero-painel" aria-hidden="true">
          <div className="painel-topo"><span /><span /><span /></div>
          <div className="painel-kpis">
            <div><small>Em aberto</small><strong>12</strong></div>
            <div><small>Urgentes</small><strong className="vermelho">3</strong></div>
            <div><small>Prontos</small><strong className="verde">5</strong></div>
          </div>
          {[
            { id: 'PV-1042', cliente: 'Construtora Horizonte', status: 'Urgente', cor: 'vermelho', p: 40 },
            { id: 'PV-1043', cliente: 'Casa & Decoração', status: 'Alerta', cor: 'amarelo', p: 75 },
            { id: 'PV-1044', cliente: 'Studio Planejados', status: 'Normal', cor: 'verde', p: 100 },
          ].map((pedido) => (
            <div key={pedido.id} className={`painel-pedido borda-${pedido.cor}`}>
              <div>
                <strong>{pedido.id}</strong> <span className={`etiqueta fundo-${pedido.cor}`}>{pedido.status}</span>
                <small>{pedido.cliente}</small>
              </div>
              <div className="painel-progresso">
                <span>{pedido.p}%</span>
                <div className="barra"><div style={{ width: `${pedido.p}%` }} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
