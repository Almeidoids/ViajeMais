import { Link } from "react-router-dom";

//Material UI
import Typography from "@mui/material/Typography";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

//Estilos
import "../styles/footer.css";

//Fontes
import "@fontsource/port-lligat-slab"

const pages = [
    {text: "Inicio",             route: "/"}, 
    {text: "Blog de Viagens",    route: "/blogs"}, 
    {text: "Galeria de Imagens", route: "/imgs"}, 
    {text: "Contate-nos",        route: "/contato"}
];

export default function Footer() {
    return (
        <Box className = "footer">

            {/* Logo */}
            <Container maxWidth = "sm" className = "logo"> 
                <AirplanemodeActiveIcon 
                    sx = {{ display: "flex", mr: 1, color: "#FA8669", height: 40, width: 40, transform: "rotateZ(30deg)" }} 
                    href="#app-bar-with-responsive-menu" 
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: 'flex',
                    fontFamily: '"Port Lligat Slab"',
                    fontWeight: "bold",
                    letterSpacing: '.3rem',
                    color: '#Fa8669',
                    textDecoration: 'none',
                }}
                >
                    ViajeMais
                </Typography>
            </Container>

            <Container maxWidth = "lg">
                <Typography
                    variant = "h6"
                    className = "ftitle"
                >
                    Com a ViajeMais, o mundo ficou pequeno o bastante, basta dar um passo para alcançar seu sonho.
                </Typography>

                {/* Navegação */}
                {pages.map((item) => {
                    return (
                    <Typography 
                        variant = "body1" 
                        sx = {{mt: 1}} 
                        className = "ftxt"
                        component={Link}
                        to = {item.route} 
                        key = {item.text}
                    >
                        {item.text} 
                    </Typography>
                    )
                })}
            </Container>
        </Box>
    )
}