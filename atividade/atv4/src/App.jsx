import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Article } from "./components/Article";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {

  const navLinks = [
    { label: "Artigo", url: "#artigo" },
    { label: "Mídia", url: "#midia" },
    { label: "Sobre", url: "#sobre" }
  ];

  const postData = {
    title: "A Corrida para Marte: O Futuro da Exploração",
    author: "Gabriel",
    date: "27 de Setembro de 2026",
    paragraphs: [
      "A colonização de Marte já não pertence apenas à ficção científica. Diversas agências espaciais e empresas privadas estão investindo em tecnologias de propulsão, habitação e reciclagem de recursos vitais.",
      "A radiação cósmica, a atmosfera rarefeita e o isolamento prolongado estão entre as principais barreiras enfrentadas pela medicina e engenharia aeroespacial atual."
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/4czjS9h4Fpg"
  };

  const relatedPosts = [
    { id: 1, title: "Como os foguetes reutilizáveis mudaram tudo", url: "#" },
    { id: 2, title: "A busca por água líquida no Sistema Solar", url: "#" },
    { id: 3, title: "Telescópios espaciais e novas descobertas", url: "#" }
  ];

  return (
    <div className="app-container">
      <Header title="AstroBlog" />
      <Navigation links={navLinks} />

      <main className="container layout-grid">
        <Article
          title={postData.title}
          author={postData.author}
          date={postData.date}
          paragraphs={postData.paragraphs}
          videoUrl={postData.videoUrl}
        />
        <Sidebar relatedPosts={relatedPosts} />
      </main>

      <Footer copyrightText="© 2026 AstroBlog. Todos os direitos reservados." />
    </div>
  );
}