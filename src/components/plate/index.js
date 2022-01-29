import {
    Container,
    Button
} from "./plateElements";
import Dice from "../dice";
import { useState } from "react";
import {db} from '../../firebase';
import { useKey } from "../../hooks";
import { is221 } from "../../model";
import { getRandomInt } from "../../math";

function Plate(props){
    function handleEnter(){
        roll();
    }
    const roll = async () => {
        if((props.playerId && props.game) ? props.game.players[props.playerId].playing : false){
            if(props.currentPlayer.id === props.playerId){
                if(props.currentPlayer.turnState < props.game.max_turn){
                    let g = props.game;
                    if(!g.players[props.currentPlayer.id].dice1.lock) {
                        g.players[props.currentPlayer.id].dice1.value = getRandomInt(6);
                    }
                    if(!g.players[props.currentPlayer.id].dice2.lock) {
                        g.players[props.currentPlayer.id].dice2.value = getRandomInt(6);
                    }
                    if(!g.players[props.currentPlayer.id].dice3.lock) {
                        g.players[props.currentPlayer.id].dice3.value = getRandomInt(6);
                    }
                    g.players[props.currentPlayer.id].turnState = g.players[props.currentPlayer.id].turnState + 1;
                    if(is221(g.players[props.currentPlayer.id].dice1.value, g.players[props.currentPlayer.id].dice2.value, g.players[props.currentPlayer.id].dice3.value)){
                        g.message = {
                            value: "Argg.. 221..." + g.players[props.currentPlayer.id].name + " can take 1 sip! And he cannot block dice..",
                            change: props.game.message.change + 1
                        };
                        g.nenette = true;
                        g.players[props.currentPlayer.id].points = g.players[props.currentPlayer.id].points + 1;
                    } else {
                        g.nenette = false;
                    }
                    db.ref(props.game.game_id).update(g);
                }
            }
        }
    }
    useKey("Space", handleEnter);
    
    const blockD1 = () => {
        db.ref(props.game.game_id + "/players/" + props.currentPlayer.id).update({dice1: {value: props.currentPlayer.dice1.value, lock: true}});
    }
    const blockD2 = () => {
        db.ref(props.game.game_id + "/players/" + props.currentPlayer.id).update({dice2: {value: props.currentPlayer.dice2.value, lock: true}});
    }
    const blockD3 = () => {
        db.ref(props.game.game_id + "/players/" + props.currentPlayer.id).update({dice3: {value: props.currentPlayer.dice3.value, lock: true}});
    }

    return(
        <Container>
            <Dice nenette={props.game.nenette} message={props.game.message} round={props.game.round} 
                playerId={props.currentPlayer.id} turn={props.currentPlayer.turnState} 
                value={props.currentPlayer.dice1.value} block={props.currentPlayer.dice1.lock} 
                canPlay={props.currentPlayer.id === props.playerId} setBlock={blockD1}/>
            <Dice nenette={props.game.nenette} message={props.game.message} round={props.game.round} 
                playerId={props.currentPlayer.id} turn={props.currentPlayer.turnState} 
                value={props.currentPlayer.dice2.value} block={props.currentPlayer.dice2.lock} 
                canPlay={props.currentPlayer.id === props.playerId} setBlock={blockD2}/>
            <Dice nenette={props.game.nenette} message={props.game.message} round={props.game.round} 
                playerId={props.currentPlayer.id} turn={props.currentPlayer.turnState} 
                value={props.currentPlayer.dice3.value} block={props.currentPlayer.dice3.lock} 
                canPlay={props.currentPlayer.id === props.playerId} setBlock={blockD3}/>
            <Button isPlayer={props.currentPlayer.id === props.playerId}>Roll</Button>
        </Container>
    );
}
export default Plate;