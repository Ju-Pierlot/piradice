import styled from "styled-components";

export const LoadingTitle = styled.h2`
    color: #fff;
    z-index: 10;
    font-weight: bold;
    fonst-size: 24px;
    transform: translateY(-40px);
`
export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`
export const CodeTitle = styled.p`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
`
export const Code = styled.p`
    color: #fff;
    font-size: 38px;
    font-weight: bold;
    text-decoration: undeline;
    margin: 10px;
`
export const PlayersTitle = styled.p`
    color: #fff;
    font-weight: bold;
    animation: waiting-players 2s linear infinite;

    @keyframes waiting-players{
        0%{opacity: 1;}
        50%{opacity: 0.5;}
        100%{opacity: 1;}
    }
`
