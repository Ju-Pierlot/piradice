import styled from "styled-components";
import Beer from "./beer";
const PointPosition = 3;
const PointSize = 4;


export const Container = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: absolute;
    top: 40px;
    left: 40px;
    @media screen and (max-width: 850px){
        display: none;
    }
`
export const DrinkP = styled.p`
    font-weight: bold;
    font-size: 18px;
    color: ${({toBe}) => (toBe ? '#fff' : '#000')};
`
export const SuperPlayerContainer = styled.div`
    width: 370px;
    height: auto;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`
export const PlayerContainer = styled.div`
    width: 270px;
    height: 50px;
    display: flex;
    align-items: center;
    background: ${({toBe}) => (toBe ? '#DEB887' : '#fff')};
    border-radius: 5px;
    overflow: hidden;
`
export const ImgContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 10px;
`
export const ImgForm = styled.div`
    width: 40px;
    height: 40px;
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
    height: 50px;
    display: flex;
    align-items: center;
    width: 108px;
`
export const Name = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: ${({toBe}) => (toBe ? '#fff' : '#000')};
`
export const DrinkContainer = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DrinkPContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40px;
`

export const DrinkImg = styled(Beer)`
    height: 35px;
    width: 35px;
    color: #f28e1c;
`
export const SuperDiceContainer = styled.div`
    width: 102px;
    height: 100%;
    display: flex;
    align-items: center;
`
export const DiceContainer = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 2px;
    border-radius: 5px;
    background: #fff;
    border: 2px solid #000;
    position: relative;
`
export const LeftTop = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: ${PointPosition}px;
    left: ${PointPosition}px;
    border-radius: 100%;
`
export const LeftCenter = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: 50%;
    left: ${PointPosition}px;
    transform: translateY(-50%);
    border-radius: 100%;
`
export const LeftBottom = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    bottom: ${PointPosition}px;
    left: ${PointPosition}px;
    border-radius: 100%;
`
export const RightTop= styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: ${PointPosition}px;
    right: ${PointPosition}px;
    border-radius: 100%;
`
export const RightCenter = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: 50%;
    right: ${PointPosition}px;
    transform: translateY(-50%);
    border-radius: 100%;
`
export const RightBottom = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    bottom: ${PointPosition}px;
    right: ${PointPosition}px;
    border-radius: 100%;
`
export const CenterCenter = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
`