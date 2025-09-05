import { useNavigate } from "react-router"
import { Container } from "./styles"



function Button() {
    const navigate = useNavigate()

    return (
        <>
            <Container onClick={() => navigate('/')}>Voltar</Container>
        </>

    )
}

export default Button