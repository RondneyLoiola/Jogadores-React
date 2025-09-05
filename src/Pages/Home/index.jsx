import { Body, Container, Content } from "./style"
import Neymar from '../../assets/Neymar.png'
import Messi from '../../assets/Messi.jpg'
import Cr7 from '../../assets/Cr7.png'
import { useNavigate } from "react-router"

const Img = [Cr7, Messi, Neymar]
const rotas = ['/Cr7', '/Messi', '/Neymar']

function Home() {
    const navigate = useNavigate()

    const acessarRota = (index) => {
        navigate(rotas[index])
    }

    return (
        <>
            <Body>
                <Container>
                    {
                        Img.map((item, index) => (
                            <div key={index}>
                                <Content onClick={() => acessarRota(index)} src={item} alt={index + 1} />
                            </div>
                        ))
                    }
                </Container>
            </Body>
        </>
    )
}

export default Home