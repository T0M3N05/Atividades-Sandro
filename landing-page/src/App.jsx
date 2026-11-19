import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Recursos } from './components/Recursos';
import { ComoFunciona } from './components/ComoFunciona';
import { Chamada } from './components/Chamada';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { links, recursos, passos, contato } from './dados';
import './App.css';

export default function App() {
  return (
    <>
      <Header nome="OnStock" links={links} />
      <main>
        <Hero
          titulo="Cada pedido da sua loja, do balcão até a entrega"
          subtitulo="Importe os pedidos do seu sistema e saiba na hora o que falta comprar, o que já foi separado e o que já pode ser entregue."
        />
        <Recursos itens={recursos} />
        <ComoFunciona passos={passos} />
        <Chamada />
        <Contato info={contato} />
      </main>
      <Footer nome="OnStock" links={links} info={contato} />
    </>
  );
}
