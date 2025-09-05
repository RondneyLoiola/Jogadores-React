import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 10rem;
    width: 900px;
    line-height: 140px;
    animation: animacao 0.7s ease;
    position: relative;
    left: 0;
    margin: 0;
    
    /* Tablets */
    @media (max-width: 768px) {
        font-size: clamp(2.5rem, 7vw, 6rem);
        line-height: 1.1;
        width: 100%;
    }
    
    /* Mobile */
    @media (max-width: 481px) {
        font-size: clamp(2rem, 6vw, 4rem);
        line-height: 1;
        text-align: center;
        width: 100%;
    }
    
    /* Mobile muito pequeno */
    @media (max-width: 320px) {
        font-size: clamp(1.5rem, 8vw, 3rem);
        width: 100%;
    }
    
`