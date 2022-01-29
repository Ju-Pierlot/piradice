import React, { useEffect, useState } from "react";
import { shuffle } from "../../../math";
import {db} from '../../../firebase';

function Logic(props){
    const [isSet, setIsSet] = useState(false);

    useEffect(() => {
        setOne();
    }, [])

    function setOne(){
        if(!isSet){
            if(props.code === props.state.game_id){
                let array = shuffle(Object.values(props.game.players));
                let obj = {players: {}, max_turn: 3, message: {value: "", change: 0}, round: 1, nenette: false}
                let i = 0;
                array.map(p => {
                    obj.players[p.id] = p;
                    obj.players[p.id].position = i;
                    obj.players[p.id].playing = (i === 0);
                    obj.players[p.id].turnState = 0;
                    obj.players[p.id].points = 0;
                    obj.players[p.id].dice1 = {value: 0, lock: false};
                    obj.players[p.id].dice2 = {value: 0, lock: false};
                    obj.players[p.id].dice3 = {value: 0, lock: false};
                    i++;
                });
                db.ref(props.code).update(obj);
            }
            setIsSet(true);
        }
    }
    return(<></>);
}
export default Logic;