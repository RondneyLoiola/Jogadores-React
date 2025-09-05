import styled from "styled-components";

export const Body = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #0d0d0d;
    overflow: hidden; /* Evita scroll quando imagens expandem */
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //gap: 0.5rem; /* Espaçamento entre as imagens */
    
    /* Tablets */
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
    
    /* Mobile */
    @media (max-width: 480px) {
        width: 95vw;
        height: 95vh;
        flex-direction: column;
        justify-content: space-around;
        gap: 0.5rem;
    }
`

export const Content = styled.img`
    width: 12vw;
    height: 80vh;
    object-fit: cover;
    transition: width 4s cubic-bezier(0.19, 1, 0.22, 1);
    filter: grayscale(100%);
    cursor: pointer;
    border-radius: 8px; /* Adiciona bordas arredondadas */

    &:hover {
        width: 50vw;
        transition: width 4s cubic-bezier(0.075, 0.82, 0.165, 1), filter 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        filter: none;
        z-index: 10;
    }
    
    /* Tablets */
    @media (max-width: 768px) {
        width: 50vw;
        height: 30vh;
        filter: none;
    }
    
    /* Mobile */
    @media (max-width: 480px) {
        width: 80vw;
        height: 30vh;
        filter: none;
    }
    
    /* Mobile muito pequeno */
    @media (max-width: 320px) {
        width: 85vw;
        height: 30vh;
        filter: none;
    }
`