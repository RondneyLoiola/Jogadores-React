import Button from "../../components/Button"
import Nome from "../../components/Nome"
import Texto from "../../components/Texto"
import { Container, Content } from "./styles"

function Messi() {
    return (
        <Container >
            <Button/>
            <Content>
                <Nome><span style={{color: 'green'}}>Cristiano </span><span style={{color: 'red'}}>Ronaldo</span></Nome>
                <Texto>Cristiano Ronaldo, jogador português, atualmente é o jogador com mais gols oficias registrados na história do futebol. Dono de 5 Bolas de Ouro e também 5 UEFA Champions League. Muitos o consideram o maior atacante de todos os tempos!</Texto>
            </Content>
        </Container>
    )
}

export default Messi