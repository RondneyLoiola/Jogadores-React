import styled from "styled-components";

export const Paragrafo = styled.p`
    font-size: 1.625rem;
    width: 100%;
    max-width: 900px;
    margin-top: clamp(20px, 4vw, 40px);
    animation: animacao1 0.7s ease;
    position: relative;
    left: 0;
    line-height: 1.6;
    
    
    /* Tablets */
    @media (max-width: 768px) {
        font-size: clamp(0.9rem, 2.2vw, 1.4rem);
        max-width: 95%;
        margin-top: clamp(15px, 3vw, 30px);
        text-align: center;
    }
    
    /* Mobile */
    @media (max-width: 480px) {
        font-size: clamp(0.875rem, 4vw, 1.2rem);
        max-width: 100%;
        margin-top: clamp(10px, 3vw, 25px);
        text-align: left;
        padding: 0 10px;
        text-align: center;
    }
    
    /* Mobile muito pequeno */
    @media (max-width: 320px) {
        font-size: clamp(0.8rem, 4.5vw, 1.1rem);
        padding: 0 5px;
        margin-top: 15px;
        text-align: center;
    }
    
    /* Telas muito largas */
    @media (min-width: 1400px) {
        font-size: clamp(1.4rem, 2vw, 1.8rem);
        max-width: 1000px;
    }
`