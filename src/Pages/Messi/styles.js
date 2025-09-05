import styled from "styled-components"
import Messi from '../../assets/messiwpp.jpg'
import Leo from '../../assets/leo.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Messi});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }
    
    @media (max-width: 768px){
        background-image: url(${Leo});
    }
    
    @media (max-width: 480px){
        background-image: url(${Leo});
    } 

    @media (max-width: 320px){
        background-image: url(${Leo});
    } 
`

export const Content = styled.div`
    position: absolute;
    top: 40%;
    left: 4%;
    color: white;
    z-index: 3;
    max-width: 60%;
    
    /* Tablets */
    @media (max-width: 768px) {
        top: 35%;
        left: 5%;
        max-width: 70%;
    }
    
    /* Mobile */
    @media (max-width: 480px) {
        top: 30%;
        left: 5%;
        right: 5%;
        max-width: 90%;
        text-align: center;
    }
    
    /* Mobile muito pequeno */
    @media (max-width: 320px) {
        top: 25%;
        left: 3%;
        right: 3%;
        max-width: 94%;
    }
    
    /* Ajustes para telas muito altas (mobile landscape) */
    @media (max-height: 500px) {
        top: 20%;
    }
`