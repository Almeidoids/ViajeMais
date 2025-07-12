//MaterialUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"

// Estilos
import "../styles/blog.css";

// Card que contém as informações dos blogs
export default function CardBlogs({data, title, description, url}) {
    return (
        <Card className = "card" sx = {{backgroundColor: "#7A746C"}} >
            {/* Data que o post foi publicado */}
            <Typography variant = "body2" sx = {{ml: 2, mt: 1, color: "#F0F2F2"}} >{data}</Typography>

            {/* Conteudo do post com titulo e descrição */}
            <CardContent>
                <Typography variant = "h3" className = "name" color = "#F0F2F2">{title} </Typography>
                <Typography variant = "body1" sx = {{mt: 2, height: 46}} color = "#F0F2F2"  >{description}</Typography>
            </CardContent>

            {/* Botão veja mais */}
            <CardActions className = 'algnActions'>
                <Button 
                    size = "large" 
                    sx = {{color: "#82E8EB", fontWeight: "bold"}}
                    onClick = {(() => window.open(url))}
                >
                    Veja mais 
                </Button>
            </CardActions>
        </Card>
    )
}