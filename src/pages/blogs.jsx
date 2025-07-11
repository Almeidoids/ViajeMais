import { useEffect, useState, lazy, Suspense } from "react"

// Material UI
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

//Componentes
import Navbar from "../components/menu";
import Footer from "../components/footer";

//funções
import getPosts from "../util/getblogs";

// Estilos
import "../styles/blog.css";

//Componentes com carregamento preguiçoso
const CardBlogs = lazy(() => import("../components/cardBlogs.jsx"));

export default function Blogs() {
    const [blogArr, setBlogArr] = useState([]);

    // chama a função getPosts e coloca seu valor dentro de blogArr
    useEffect(() => {
        let data = [];

        //Função Assíncrona
        async function setPosts() {
            data = await getPosts();
            setBlogArr(data);
        }
        
        setPosts()
    }, [])

    return (
        <Box className="app">
            <header className="App-header">
                <Navbar />
            </header>
            
            <main className = "algnPosts">

                {/* Faz uma lista com de cards com carregamento preguiçoso */}
                {blogArr.map((item) => {
                    return (
                        <Suspense 
                            fallback = {
                                <Box className = "loading" sx = {{display: "flex", justifyContent: "center"}} >
                                    <CircularProgress />
                                </Box>
                            }
                        >
                            <CardBlogs
                                data = {item.data}
                                title = {item.title}
                                description = {item.description}
                                url = {item.url}
                            />
                        </Suspense>
                    )
                })}   
            </main>

            <Footer />
        </Box>
    )
}