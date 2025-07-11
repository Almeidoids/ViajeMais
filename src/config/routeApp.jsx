import { Routes, Route } from "react-router-dom"

//Páginas
import App from "../App";
import Blogs from "../pages/blogs";
import GlrImgs from "../pages/glImgs";
import Contato from '../pages/contato'

// Rotas das páginas
export default function RouteApp() {
    return (
        <Routes>
            <Route path = "/" element = {<App />} />
            <Route path = "/blogs" element = {<Blogs />} />
            <Route path = "/imgs" element = {<GlrImgs />} />
            <Route path = "/contato" element = {<Contato />} />
        </Routes>
    )
}