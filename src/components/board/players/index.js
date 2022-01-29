import React, { useState, useEffect } from "react";
import{
    Container,
    PlayerContainer,
    Img,
    ImgContainer,
    ImgForm,
    NameContainer,
    Name,
    DrinkContainer,
    DrinkP,
    DrinkImg,
    DrinkPContainer,
    SuperPlayerContainer,
    DiceContainer,
    SuperDiceContainer
} from "./playersElements";
import p1 from "../../../images/pirate_1.jpg";
import p2 from "../../../images/pirate_2.jpg";
import p3 from "../../../images/pirate_3.jpg";
import p4 from "../../../images/pirate_4.jpg";
import p5 from "../../../images/pirate_5.jpg";
import p6 from "../../../images/pirate_6.jpg";
import { One, Two, Three, Four, Five, Six} from "./template";


function Players(props){
    const imgs = [p1, p2, p3, p4, p5, p6];

    const Number = (number) => {
        switch(number){
            case 1:
                return <One />
            case 2:
                return <Two />
            case 3:
                return <Three />
            case 4:
                return <Four />
            case 5:
                return <Five />
            case 6:
                return <Six />
            default:
                return <></>
        }
    }

    function displayPlayers(){
        return(
            props.players && props.players.sort((a, b) => (a.position > b.position) ? 1 : -1)
            .map((p, i) => {
                return(
                    <SuperPlayerContainer key={i}>
                        <PlayerContainer toBe={p.playing}>
                            <ImgContainer>
                                <ImgForm>
                                    <Img src={imgs[p.img]} />
                                </ImgForm>
                            </ImgContainer>
                            <NameContainer>
                                <Name toBe={p.playing}>{p.name}</Name>
                            </NameContainer>
                            <DrinkContainer>
                                <DrinkPContainer>
                                    <DrinkP toBe={p.playing}>{p.points}</DrinkP>
                                </DrinkPContainer>
                                <DrinkImg/>
                            </DrinkContainer>
                        </PlayerContainer>
                        <SuperDiceContainer>
                            {
                                (p.dice1.value !== 0 && p.dice1.lock) && 
                                <DiceContainer>
                                    {Number(p.dice1.value)}
                                </DiceContainer>
                            }
                            {
                                (p.dice2.value !== 0 && p.dice2.lock) && 
                                <DiceContainer>
                                    {Number(p.dice2.value)}
                                </DiceContainer>
                            }
                            {
                                (p.dice3.value !== 0 && p.dice3.lock) && 
                                <DiceContainer>
                                    {Number(p.dice3.value)}
                                </DiceContainer>
                            }
                        </SuperDiceContainer>
                    </SuperPlayerContainer>
                );
            })
        );
    }

    return(
        <Container>
            {displayPlayers()}
        </Container>
    );
}
export default Players;