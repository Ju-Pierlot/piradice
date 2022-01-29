import styled from "styled-components";
import { FaDice } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link as LinkR} from "react-router-dom";
import { SecondaryColor } from "../../../settings";

export const PlayersContainer = styled.div`
    width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 380px;
`
export const PlayerContainer = styled.div`
    width: 100%;
    height: 60px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    margin-bottom: 20px;
`
export const ImgContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgForm = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const Img = styled.img`
    height: 100%;
`
export const NameContainer = styled.div`
    height: 60px;
    width: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Name = styled.p`
    margin: 0;
    transform: translateX(-30px);
    font-size: 20px;
    font-weight: bold;
`
export const StartButton = styled(LinkR)`
    text-decoration: none;
    color: #fff;
    width: 100%;
    font-weight: bold;
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
export const StartButtonContent = styled.div`
    width: calc(100% - 10px);
    height: 50px;
    border-radius: 10px;
    border: 5px solid ${SecondaryColor};
    background: ${SecondaryColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition .2s;

    &:hover{
        background: #fff;
        color: ${SecondaryColor};
    }
    &:hover ${Arrow}{
        opacity: 1;
        color: ${SecondaryColor};
    }
    &:hover ${Dice}{
        color: ${SecondaryColor};
    }

`