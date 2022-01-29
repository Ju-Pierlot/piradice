import React from "react";
import {
    Container,
    Title,
    LCount
} from "./playerTitleElements";

function PlayerTitle(props){

    return(
        <Container>
            {(props.currentPlayer.id === props.user) ? <Title>It's your turn!</Title> : <Title>{props.currentPlayer.name}'s turn</Title>}
            <LCount>Dice roll: {props.currentPlayer.turnState}/{props.game.max_turn}</LCount>
        </Container>
    );
}
export default PlayerTitle;