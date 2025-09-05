import { Paragrafo } from "./styles"

function Texto({children}){
    return(
        <>
            <Paragrafo>{children}</Paragrafo>
        </>
    )
}

export default Texto