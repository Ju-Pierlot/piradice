import styled from "styled-components";
import { SecondaryColor } from "../../../settings";
const border = '10px solid ' + SecondaryColor;

export const InputContainer = styled.div`
    width: 500px;
    height: 80px;
    @media screen and (max-width: 850px){
        width: 330px;
        height: 60px;
    }
`
export const Input = styled.input`
    width: 100%;
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
        height: calc(100% - 3px);
        border-bottom: 3px solid #fff;
        font-size: 28px;
    }
    
`
export const CharactersContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 850px){
        width: 250px;
    }
`
export const CharacterContainer = styled.div`
    width: ${({selected}) => (selected ? '80px' : '100px')};
    height: ${({selected}) => (selected ? '80px' : '100px')};
    border: ${({selected}) => (selected ? border : 'none')};
    border-radius: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const ButtonCharacter = styled.button`
    margin: 0px 20px 50px 20px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }
    @media screen and (max-width: 850px){
        margin: 0px 10px 25px 10px;
    }

    &:hover ${CharacterContainer}{
        border: 10px solid ${SecondaryColor};
        width: 80px;
        height: 80px;
    }
`

export const ImgPirate = styled.img`
    height: 100%;
    width: 100%;
`