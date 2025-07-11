import { 
    useEffect, useState, Suspense,
    lazy
} from "react";

// Material UI
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Container  from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

//Componentes
import Navbar from "../components/menu"
import Footer from "../components/footer"

//Estilos
import "../styles/galeria.css";

//Fontes

import "@fontsource/port-lligat-slab"

export default function GlrImgs() {
    const [imgArr, setImgArr] = useState([]);
    const [openM, setOpenM] = useState(false); // Var para abrir ou fechar Modal
    const [image, setImage] = useState(null);

    // Gera uma lista com as urls das imgs e armazena em imgArr
    useEffect(() => {
    let arr = []
        for (let num = 1; num <= 20; num++) {
            arr.push(require(`../assets/imgs/img${num}.jpg`));
        }

        setImgArr(arr);
    }, []);

    return (
        <Box className="app">
            <header className="App-header">
                <Navbar />
            </header>

            <main>
                <Typography 
                    variant = "h1"
                    sx = {{mt: 15, textAlign: "center"}}
                >
                    Galeria de Imagens
                </Typography>

                {/* Grid com as imagens */}
                <Grid 
                    container 
                    columns = {12} 
                    spacing = {0.5} 
                    className = "grid"
                >
                    {imgArr.map((item) => {
                        return (
                            <Grid 
                                key = {item}
                                size = {{xs: 4, sm: 3, md: 2.1}}
                                offset = "auto" 
                                className = "obj"
                                sx = {{margin: 0, height: {xs: 100, sm: 150, md: 200}, width: {md: 300, sm: 250, xs: 150}}}
                            >
                                <img 
                                    src = {item} 
                                    style = {{objectFit: "cover"}} 
                                    alt = {`imagem`} 
                                    className = "imgs"
                                    onClick ={() => abrirModal(setImage, setOpenM, item)}
                                    />
                            </Grid>
                        )
                    })}
                </Grid>

                <Modal 
                    open = {openM}
                    onClose = {() => setOpenM(false)}
                    aria-labelledby = "modal-close"
                    aria-describedby = "Imagem"
                >
                    <ModalImg img = {image} setOpen = {setOpenM} />
                </Modal>
            </main> 
            <Footer />
        </Box>
    )
}

// Modal que se abre ao clicar em uma imagem.
function ModalImg({img, setOpen}) {
    return (
        <Box>
            <Container sx = {{display: "flex", justifyContent: "flex-end"}}>
                <IconButton
                    size = "large"
                    aria-label="Fechar modal"
                    onClick = {() => {setOpen(false)}}
                    sx = {{color: "#F0F2F2"}}
                >
                    <CloseIcon />
                </IconButton>
            </Container>

            <Container 
                maxWidth = "md" 
                className = "algnImg">
                <img src = {img} alt = "imagem" /> 
            </Container>
        </Box>
    )
}

//Função chamada para abrir o modal
function abrirModal(setImg, setOpen, url) {
    setImg(url);
    setOpen(true);
    console.log(url);
}