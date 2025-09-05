import styled from "styled-components"

export const Container = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: 1px solid #fff;
    opacity: .9;
    border-radius: 15px;
    padding: 5px;
    text-align: center;
    width: 100px;
    color: #fff;
    position: absolute;
    top: 5%;
    left: 2.3%;
    text-decoration: none;
    margin: 0;
    animation: animacao 0.7s ease;
    transition: border-radius .8s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 2;

    &:hover {
        border-radius: 0px;
    }
`