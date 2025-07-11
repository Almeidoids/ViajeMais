import { useRef } from "react";
import { Link } from "react-router-dom";

//Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

//estilos
import "./styles/app.css"

//Componentes
import Navbar from "./components/menu";
import Footer from "./components/footer";

//Imagens
import banner from "./assets/app/banner.png";
import qs from "./assets/app/qsSection.jpg";
import obj from "./assets/app/objSection.jpg";
import cntt from "./assets/app/cnttSection.jpg";
import blogImg from "./assets/app/blogImg.jpg";

//Fontes
import "@fontsource/port-lligat-slab/400.css" 

function App() {
  const refImg = useRef(null);
  const refImg2 = useRef(null);
  const refImg3 = useRef(null);

  return (
    <Box className="app">
      <header className="App-header">
        <Navbar />
      </header>

      <main>

        {/* Banner */}
        <Container className = "sectionBanner">
          <img src = {banner} className = "banner" alt = "Onde você pode discutir e abraçar todos seus sonhos" />
        </Container>

        {/* Botão que leva aos Blogs */}
        <aside>
          <Typography 
            variant = "h2" 
            sx = {{
              mt: {xs: 0, sm: 10},
            }} 
            className = "title"
          >
            Acesse um dos Nossos Últimos Blogs
          </Typography>
          <Box className = "blogs" sx = {{width: "80%"}}>
            <Link to = "/blogs" ><img src = {blogImg} alt = "link para blogs" className = "blogImg" /></Link>
          </Box>
        </aside>

          {/* Seções adicionais */}
        <section style = {{backgroundColor: "#82E8EB", marginTop: 50}} className = "section" onMouseOver ={() => refImg.current.classList.add("qsImgAnimation")}>
          <Box className = "txtBox">
            <Typography 
              variant = "h3" 
              className = "text"
            >
              Quem Somos
            </Typography>
            <Typography variant = "body1" className = "text">Somos apaixonados por explorar o mundo e contar histórias. Nosso blog nasceu da vontade de transformar experiências em inspiração — para quem sonha, planeja ou simplesmente ama viajar.</Typography>
            <Typography variant = "body1" className = "text">Acreditamos que cada destino guarda algo único, e nossa missão é compartilhar essas descobertas com leveza e autenticidade. Aqui, você vai encontrar não só dicas, mas também sentimentos, vivências e encontros que só uma boa viagem proporciona.</Typography>
          </Box>
          <Box sx = {{display: "flex"}}>
            <img 
              src = {qs} 
              className = "qsImg" 
              alt = "imagem de dois paraquedistas em um salto" 
              ref = {refImg} 
            />
          </Box>
        </section>

        <section style = {{backgroundColor: "#FAB969"}} className = "section" onMouseOver ={() => refImg2.current.classList.add("qsImgAnimation")} >
          <Box sx = {{display: "flex"}}>
            <img 
              src = {obj} 
              className = "qsImg qsImg2" 
              alt = "imagem de uma praia ao por do sol" 
              ref = {refImg2} 
              style = {{objectPosition: "left"}}
            />
          </Box>
          <Box className = "txtBox">
            <Typography 
              variant = "h3" 
              className = "text"
            >
              Nosso objetivo
            </Typography>
            <Typography variant = "body1" className = "text">Queremos mostrar que viajar não precisa ser complicado ou caro. Ajudamos você a descobrir destinos incríveis, com dicas reais, roteiros honestos e muita vontade de compartilhar o que o mundo tem de melhor.</Typography>
            <Typography variant = "body1" className = "text">Nosso foco é tornar o planejamento mais acessível e prazeroso, trazendo conteúdos que vão do mochilão econômico à viagem dos sonhos — sempre com verdade, cuidado e um olhar apaixonado por cada lugar.</Typography>
          </Box>
        </section>

        <section style = {{backgroundColor: "#82E8EB"}} className = "section" onMouseOver ={() => refImg3.current.classList.add("qsImgAnimation")}>
          <Box className = "txtBox">
            <Typography 
              variant = "h3" 
              className = "text"
            >
              Fale com a gente
            </Typography>
            <Typography variant = "body1" className = "text">Tem uma dúvida, sugestão ou só quer trocar uma ideia? Estamos sempre abertos a conversar! Nos mande sua mensagem — vamos adorar te ouvir.</Typography>
            <Typography variant = "body1" className = "text">Adoramos conhecer outros viajantes, ouvir histórias e criar conexões reais. Afinal, viajar também é isso: encontrar pessoas incríveis pelo caminho — mesmo que seja aqui, pela tela.</Typography>
          </Box>
          <Box sx = {{display: "flex"}}>
            <img 
              src = {cntt} 
              className = "qsImg" 
              alt = "imagem de um coco em uma praia"
              ref = {refImg3}
              style = {{objectPosition: "right"}}
            />
          </Box>
        </section>
      </main>

      <Footer />
    </Box>
  );
}

export default App;
