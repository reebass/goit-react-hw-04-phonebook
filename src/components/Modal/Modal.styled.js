import styled from "styled-components";
// import { ReactComponent as CloseBtnIcon } from "../icons/close.svg";

export const ModalBackDrop = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(254,254,255, .3);
    backdrop-filter: blur(3px);
`

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 500px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgb(52,56,61);
    background: radial-gradient(circle, rgba(52,56,61,1) 32%, rgba(32,35,41,1) 79%, rgba(32,35,41,1) 100%);
    border-radius: 4px;
    padding: 15px;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    background-color: transparent;
    color: #C8C8C8;
    border: 0;
    
    transition: color 250ms ease;

    :hover {
        color: #ec2645;
    }
`