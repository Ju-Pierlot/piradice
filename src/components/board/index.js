import {
    Container
} from "./boardElements";
import React, { useState, useEffect } from "react";
import Plate from "../plate";
import Ocean from "../ocean";
import {db} from '../../firebase';
import Players from "./players";
import { useSelector } from "react-redux";
import { stateSelector } from "../../store/stateSelectors";
import Logic from "./logic";
import PlayerTitle from "./playerTitle";
import { calculateRoundEnd } from "../../model";
import Message from "./message";


function Board(props){
    const state = useSelector(stateSelector);
    const [game, setGame] = useState({game: null, currentPlayer: null});

    useEffect(() => {
        let players;
        db.ref(props.code).on('value',(snap)=>{
            let data = snap.val();
            players = data.players;
            if(data){
                let goIn = false;
                let pPlaying = null;
                let reset = false;
                Object.values(players).map(p => {
                    if(p.dice1 === undefined){
                        reset = true;
                    }
                    if(p.playing){
                        pPlaying = p;
                    }
                });
                if(pPlaying && !reset){
                    if(state.player_id === pPlaying.id){
                        if(pPlaying.dice1.lock && pPlaying.dice2.lock && pPlaying.dice3.lock){
                            let g = Object.assign({}, data);
                            if(pPlaying.position === 0){
                                g.max_turn = pPlaying.turnState;
                            }
                            changePlayer(g, pPlaying);
                        } else if(pPlaying.turnState === data.max_turn){
                            blockAll(pPlaying);
                        }
                    }
                    goIn = true;
                    let obj = {game: data, currentPlayer: pPlaying};
                    setGame(obj);
                }
                if(!goIn || reset){
                    setGame({game: data, currentPlayer: null});
                }
            }
        });
    }, []);
    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const blockAll = async (p) => {
        await sleep(2500);
        db.ref(props.code + "/players/" + p.id).update({dice1: {value: p.dice1.value, lock: true}, dice2: {value: p.dice2.value, lock: true}, dice3: {value: p.dice3.value, lock: true}});
    }
    const changePlayer = async (game, current) => {
        await sleep(2000);
        let players = Object.values(game.players);
        if(current.position + 1 === players.length){
            let newGame = calculateRoundEnd(game);
            db.ref(props.code).update(newGame);
        } else {
            players.map(pl => {
                if(pl.position === current.position + 1){
                    game.players[pl.id].playing = true;
                    game.players[current.id].playing = false;
                    db.ref(props.code).update(game);
                    return;
                }
            });
        }
    }

    return(
        <Container>
            {game.currentPlayer && <Players code={props.code} playerId={state.player_id} players={game.game && Object.values(game.game.players)}/>}
            {(game.game && game.currentPlayer) && <PlayerTitle game={game.game} user={state.player_id} currentPlayer={game.currentPlayer}/>}
            {(props.forGame && game.game && game.currentPlayer) && <Plate game={game.game} playerId={state.player_id} currentPlayer={game.currentPlayer}/>}
            {(game.game && game.currentPlayer) && <Message change={game.game.message.change} message={game.game.message.value}/>}
            <Ocean forGame={props.forGame}/>
            {game.game && <Logic code={props.code} game={game.game} state={state}/>}
        </Container>
    );
}
export default Board;