import styled from "styled-components";
import { SecondaryColor } from "../../settings";
import { FaDice } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import {Link as LinkR} from "react-router-dom";
import {GiPirateCoat} from "react-icons/gi";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`
export const Title = styled.p`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
`
export const InputContainer = styled.div`
    width: 500px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 850px){
        width: 330px;
        height: 50px;
    }
`
export const Input = styled.input`
    width: 100px;
    height: calc(100% - 5px);
    background: ${SecondaryColor};
    border: none;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    border-bottom: 5px solid #fff;

    &:focus{
        outline: none;
    }
    @media screen and (max-width: 850px){
        width: 70px;
        font-size: 28px;
        border-bottom: 3px solid #fff;
        height: calc(100% - 3px);
    }
`
export const LineContainer = styled.div`

`
export const Line = styled.p`
    color: #fff;
    font-size: 44px;
    font-weight: bold;
    margin: 0;
    @media screen and (max-width: 850px){
        font-size: 34px;
    }
`
export const Dice = styled(FaDice)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: #fff;
    height: 30px;
    width: 30px;
    transition .2s;
`
export const Pirate = styled(GiPirateCoat)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: #fff;
    height: 30px;
    width: 30px;
    transition .2s;
`
export const Arrow = styled(IoMdArrowRoundForward)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    color: #fff;
    height: 30px;
    width: 30px;
    opacity: 0;
    transition .2s;
`
export const StartButtonContent = styled.button`
    width: 300px;
    height: 60px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: 5px solid ${SecondaryColor};
    background: ${SecondaryColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition .2s;
    cursor: pointer;
    padding: 0;

    &:hover{
        background: #fff;
        color: ${SecondaryColor};
    }
    &:hover ${Arrow}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${Pirate}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${Dice}{
        color: ${SecondaryColor};
    }

`
export const DefaultButtonContainer = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const StartLink = styled(LinkR)`
    width: 300px;
    height: 60px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: 5px solid ${SecondaryColor};
    background: ${SecondaryColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition .2s;
    cursor: pointer;
    padding: 0;

    &:hover{
        background: #fff;
        color: ${SecondaryColor};
    }
    &:hover ${Arrow}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${Pirate}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${Dice}{
        color: ${SecondaryColor};
    }
    @media screen and (max-width: 850px){
        width: 300px;
        height: 60px;
    }

`
export const ErrorMessage = styled.p`
    color: #c75952;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 10px 0;
`