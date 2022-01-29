import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% + 180px);
    left: 50%;
    z-index: 50;
    transform: translateX(-50%);
    @media screen and (max-width: 850px){
        top: 200px;
    }
`
export const MessageContent = styled.p`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    ${({animatio}) => (animatio ? 'animation: message 2s ease-out forwards' : '')};

    @keyframes message {
        0% {opacity: 1;}
        100% {
          opacity: 0;
        }
      }
`