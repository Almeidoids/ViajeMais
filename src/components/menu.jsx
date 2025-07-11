import { useState } from "react";
import { Link } from "react-router-dom";

//Fontes
import "@fontsource/port-lligat-slab"
import "@fontsource/inter"

//Estilos
import "../styles/menu.css"

//Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
    {text: "Inicio",             route: "/"}, 
    {text: "Blog de Viagens",    route: "/blogs"}, 
    {text: "Galeria de Imagens", route: "/imgs"}, 
    {text: "Contate-nos",        route: "/contato"}
];

export default function Navbar() {
    // Variavel que serve apenas para dispositivos móveis
    // Abre e fecha menu
    const [collapse, setCollapse] = useState(false); 

    return (
        <AppBar position="fixed" >
            <Container maxWidth="xl" className = "content" >
                <Toolbar disableGutters >
                    
                    {/* "Logo" */}
                    <Link to = "/" ><AirplanemodeActiveIcon sx={{ display:'flex', mr: 1 }} className = "airIcon" /></Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component = {Link}
                        to = "/"
                        sx={{
                        mr: 2,
                        display: {xs: "flex", sm: "none", md: 'flex'},
                        fontFamily: '"Port Lligat Slab"',
                        fontWeight: "bold",
                        letterSpacing: '.3rem',
                        color: '#Fa8669',
                        textDecoration: 'none',
                        }}
                    >
                        ViajeMais
                    </Typography>

                    {/* Opções do Menu | Aparece apenas em tablets e desktops */}
                    <Box sx={{ flexGrow: 1, display: {xs: "none", sm: 'flex'}, justifyContent: "flex-end"}}>
                        {pages.map((item) => {
                            return (
                                <Link to = {item.route} style = {{textDecoration: "none"}} >
                                    <MenuItem key={item.text} >
                                        <Typography sx={{ textAlign: 'center', fontFamily: "'Inter', sans-serif", color: "initial"}}>{item.text}</Typography>
                                    </MenuItem>
                                </Link>
                            )
                        })}
                    </Box>
                    
                    {/* Botão para abrir o menu mobile */}
                    <Box sx = {{display: {xs: "flex", sm: "none"}}} className = "mnI">
                        <IconButton
                            size="large"
                            aria-label="Abrir menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setCollapse(!collapse) } //Abre ou fecha menu
                            color = "#6C7A7A"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>

                {/* Menu Mobile */}
                <Box sx = {{display: collapse ? "block" : "none"}} className = {collapse ? "collapse" : ""}>
                    {pages.map((item) => {
                        return (
                            <Link to = {item.route} style = {{textDecoration: "none"}} >
                                <MenuItem key={item.text}>
                                    <Typography sx={{ textAlign: 'center', fontFamily: "'Inter', sans-serif", color: "initial"}}>{item.text}</Typography>
                                </MenuItem>
                            </Link>
                        )
                    })}
                </Box>
            </Container>
        </AppBar>
    )
}