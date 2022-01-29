import styled from "styled-components";
import { MainColor, SecondaryColor } from "../../settings";
import {Link as LinkR} from "react-router-dom";
import { ImDisplay } from "react-icons/im";
import { BsController } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";


export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 100px;
    z-index: 10;
    color: #fff;
`
export const BestDeveloper = styled.span`
    color: ${SecondaryColor};
    animation: best-animation 2s linear infinite;

    @keyframes best-animation{
        0%{color: ${SecondaryColor}; }
        50%{color: #e57319; }
        100%{color: ${SecondaryColor}; }
    }
`
export const GoIcon = styled(IoMdArrowRoundForward)`
    color: #fff;
    position: absolute;
    height: 40px;
    width: 40px;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    transition: .2s;
    opacity: 0;
`
export const HostIcon = styled(ImDisplay)`
    color: #fff;
    position: absolute;
    height: 40px;
    width: 40px;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    transition: .2s;
    @media screen and (max-width: 850px){
        left: 30px;
    }
`
export const JoinIcon = styled(BsController)`
    color: #fff;
    position: absolute;
    height: 40px;
    width: 40px;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    transition: .2s;
    @media screen and (max-width: 850px){
        left: 30px;
    }
`
export const ButtonContainer = styled.div`
    width: 400px;
    height: 70px;
    background: ${SecondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    position: relative;
    transition: .2s;
    border: 5px solid ${SecondaryColor};

    &:hover{
        background: #fff;
        color: ${SecondaryColor};

    }
    &:hover ${GoIcon}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${HostIcon}{
        color: ${SecondaryColor};
    }
    &:hover ${JoinIcon}{
        color: ${SecondaryColor};
    }
    @media screen and (max-width: 850px){
        width: 300px;
        height: 60px;
    }

`
export const LinkButton = styled(LinkR)`
    text-decoration: none;
    transition: .2s;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 50px;
    z-index: 10;
`