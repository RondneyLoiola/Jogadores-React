import Button from "../../components/Button"
import Nome from "../../components/Nome"
import Texto from "../../components/Texto"
import { Container, Content } from "./styles"

function Messi() {
    return (
        <Container >
            <Button/>
            <Content>
                <Nome><span style={{color: '#089746'}}>Neymar </span><span style={{color: '#FFCD08'}}>Junior</span></Nome>
                <Texto>Neymar Júnior, o artilheiro da seleção brasileira e um dos melhores jogadores do século, ex-jogador do Barcelona e PSG, onde teve mais de 100 gols em cada clube. Foi um dos principais jogadores do Barcelona em 2015, conquistando a Tríplice Coroa da Espanha, participando do Lendário Trio MSN, junto de Messi e Suárez.</Texto>
            </Content>
        </Container>
    )
}

export default Messi