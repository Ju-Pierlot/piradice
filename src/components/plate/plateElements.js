import styled from "styled-components";
import {SecondaryColor} from "../../settings";

export const Container = styled.div`
    width: 800px;
    z-index: 421;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media screen and (max-width: 850px){
        width: 700px;
        justify-content: space-around;
    }
`
export const Button = styled.button`
    width: 200px;
    height: 60px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: 3px solid #fff;
    background: ${SecondaryColor};
    position: absolute;
    bottom: -190px;
    display: none;
    justify-content: center;
    align-items: center;
    transition .2s;
    cursor: pointer;
    padding: 0;
    z-index: 421;


    @media screen and (max-width: 850px){
        display: ${({isPlayer}) => (isPlayer ? 'flex' : 'none')};
    }
`