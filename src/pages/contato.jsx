import { useState } from "react";

// Material UI
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container"
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

//Componentes
import Navbar from "../components/menu"
import Footer from "../components/footer"

//Estilos
import "../styles/contato.css";

export default function Contato() {
    const [alert, setAlert] = useState(false);
    
    // Vars que controlam os erros do TextField
    const [error, setError] = useState(false); 
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);


    return (
        <Box className="app">
            <header className="App-header">
                <Navbar />
            </header>
    
            <main>
                <form 
                    onSubmit = {(e) => submit(e, setAlert, setError, setError2, setError3, setError4)} //Envia para ser tratado pela função submit
                >
                    <Container maxWidth = "lg" className = "contatar">
                        <TextField
                            name = "question"
                            label = "Sua pergunta"
                            className = "inputs"
                            required
                            fullWidth
                            sx = {{my: 1}}
                            variant = "standard"
                            error = {error}
                            onInvalid = {() => setError(true)} // Se o input estiver inválido, dá erro
                        />
                        <TextField  
                            name = "name"
                            label = "Nome" 
                            className = "inputs"
                            required 
                            fullWidth
                            sx = {{my: 1}}
                            variant = "standard"
                            error = {error2}
                            onInvalid = {() => setError2(true)}
                        />
                        <TextField  
                            name = "lastName" 
                            label = "Sobrenome" 
                            className = "inputs"
                            required
                            fullWidth
                            sx = {{my: 1}}
                            variant = "standard"
                            error = {error3}
                            onInvalid = {() => setError3(true)} 
                        />
                        <TextField 
                            type = "email" 
                            name = "Email" 
                            label = "E-mail" 
                            className = "inputs"
                            required 
                            fullWidth
                            sx = {{my: 1}}
                            variant = "standard"
                            error = {error4}
                            onInvalid = {() => setError4(true)}
                        />
                        <Box className = "organization">
                            <Button 
                                type = "reset" 
                                className = "buttons" 
                                variant = "contained"
                                sx = {{backgroundColor: "#FA8669", color: "#000", margin: 1}}
                            >
                                Limpar
                            </Button>
                            <Button 
                                type = "submit"  
                                className = "buttons"
                                variant = "contained"
                                sx = {{backgroundColor: "#82E8EB", color: "#000", margin: 1}}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Container>
                </form>
            </main>

            {/* Alerta */}
            <Box sx = {{display: "flex", justifyContent: "center"}}>
                <Alert 
                    severity = "success" 
                    sx = {{display: alert ? "flex" : "none", position: "fixed", top: "80%", mx: "5%" }} 
                    className = "alert" 
                    variant = "filled" 
                    onClose = {() => setAlert(false)}
                >
                    E-mail enviado com sucesso
                </Alert>
            </Box>
            <Footer />
        </Box>
    )
}

// Submit do form | neste contexto apenas retira os erros anteriores dos inputs e abre alerta
function submit(e, setAlert, setError, setError2, setError3, setError4) {
    e.preventDefault();
    
    setError(false);
    setError2(false);
    setError3(false);
    setError4(false);
    setAlert(true);
}