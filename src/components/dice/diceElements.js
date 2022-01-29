import styled from "styled-components";
const PointPosition = 30;
const PointSize = 40;
const MinPointPosition = 15;
const MinPointSize = 20;

export const Container = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 40px;
    background: ${({isBlocked}) => (isBlocked ? '#DEB887' : '#fff')};
    border: 5px solid #000;
    position: relative;
    cursor: pointer;
    transition: .3s;
    animation: ${({animation}) => (animation ? 'dicePicked .5s linear' : 'none')};

    &:hover {
        transform: ${({isBlocked}) => (isBlocked ? '' : 'translateY(-20px) scale(105%)')};
        box-shadow: ${({isBlocked}) => (isBlocked ? '' : '0px 24px 25px -14px rgba(0,0,0,0.24)')};
    }

    @keyframes dicePicked {
        0% {transform: rotate(0);}
        25% {transform: rotate(-7deg);}
        50% {transform: rotate(7deg);}
        75% {transform: rotate(-7deg);}
        100% {transform: rotate(0);}
    }
    @media screen and (max-width: 850px){
        width: 100px;
        height: 100px;
        border: 2px solid #000;
        border-radius: 10px;
    }
`
export const LeftTop = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: ${PointPosition}px;
    left: ${PointPosition}px;
    border-radius: 100%;
    @media screen and (max-width: 850px){
        top: ${MinPointPosition}px;
        left: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
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
    @media screen and (max-width: 850px){
        left: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
        
    }
`
export const LeftBottom = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    bottom: ${PointPosition}px;
    left: ${PointPosition}px;
    border-radius: 100%;
    @media screen and (max-width: 850px){
        bottom: ${MinPointPosition}px;
        left: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
`
export const RightTop= styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    top: ${PointPosition}px;
    right: ${PointPosition}px;
    border-radius: 100%;
    @media screen and (max-width: 850px){
        top: ${MinPointPosition}px;
        right: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
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
    @media screen and (max-width: 850px){
        right: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
`
export const RightBottom = styled.div`
    width: ${PointSize}px;
    height: ${PointSize}px;
    background: #000;
    position: absolute;
    bottom: ${PointPosition}px;
    right: ${PointPosition}px;
    border-radius: 100%;
    @media screen and (max-width: 850px){
        bottom: ${MinPointPosition}px;
        right: ${MinPointPosition}px;
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
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
    @media screen and (max-width: 850px){
        width: ${MinPointSize}px;
        height: ${MinPointSize}px;
    }
`
export const DefaultDice = styled.p`
    font-size: 120px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    @media screen and (max-width: 850px){
        font-size: 60px;
    }
`
