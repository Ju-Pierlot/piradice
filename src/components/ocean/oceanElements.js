import styled from "styled-components";
import { MainColor } from "../../settings";
import Icon from "./pirate";
const WaveLink = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23" + MainColor.substring(1) + "'/%3E%3C/svg%3E";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: calc(50% - 80px);
    background: ${MainColor};
    bottom: 0;
    z-index: 1;
`
export const OceanContainer = styled.div`
    height: 300px;
    width: 100%;
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    overflow: hidden;
    @media screen and (max-width: 850px){
        
    }
`
export const Wave1 = styled.div`
    background: url("${WaveLink}");
    background-position: bottom;
    background-repeat: repeat-x;
    position: absolute;
    bottom: 0;
    width: 200%;
    height: 120px;
    animation: wave 40s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 1;
    z-index: 5;
    @keyframes wave {
        0% {transform: translateX(0);}
        25% {transform: translateX(-25%);}
        50% {transform: translateX(-50%);}
        75% {transform: translateX(-25%);}
        100% {transform: translateX(0);}
    }  
`
export const Wave2 = styled.div`
    background: url("${WaveLink}");
    background-position: bottom;
    background-repeat: repeat-x;
    position: absolute;
    width: 200%;
    height: 120px;
    transform: translate3d(0, 0, 0);
    bottom: 0;
    z-index: 3;
    animation: wave 48s linear reverse infinite;
    opacity: 0.5;
`
export const Wave3 = styled.div`
    background: url("${WaveLink}");
    background-position: bottom;
    background-repeat: repeat-x;
    position: absolute;
    width: 200%;
    height: 120px;
    transform: translate3d(0, 0, 0);
    bottom: 0;
    z-index: 2;
    animation: wave 58s -1s linear infinite;
    opacity: 0.5;
`
export const Boat = styled(Icon)`
    
`