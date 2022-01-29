import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`
export const Title = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    margin: 0;
    text-align: center;
`
export const LCount = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    margin: 10px 0 0 0;
`