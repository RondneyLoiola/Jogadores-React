import Button from "../../components/Button"
import Nome from "../../components/Nome"
import Texto from "../../components/Texto"
import { Container, Content } from "./styles"

function Messi() {
    return (
        <Container >
            <Button/>
            <Content>
                <Nome><span style={{color: '#78AFE0'}}>Lionel </span>Messi</Nome>
                <Texto>Lionel Messi, jogador argentino, fez muita história pelo Barcelona, dono de 8 Bolas de Ouro e 4 UEFA Champions League. Em 2022 venceu a Copa do Mundo da Fifa em confronto com a França. Messi é o maior vencedor da história do futebol e é considerado por muitos o Maior Jogador de Todos os Tempos!</Texto>
            </Content>
        </Container>
    )
}

export default Messi