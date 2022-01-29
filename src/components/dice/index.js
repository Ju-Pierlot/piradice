import { useEffect, useState } from "react";
import {
    Container
} from "./diceElements";
import { One, Two, Three, Four, Five, Six, Default} from "./template";
import { getRandomInt, shuffle } from "../../math";




function Dice(props){
    const [nb, setNb] = useState(0);
    const [diceValue, setDiceValue] = useState(0);
    const [anim, setAnim] = useState(false);
    const [turn, setTurn] = useState(0);
    const [playerId, setPlayerId] = useState(null);
    const [round, setRound] = useState(0); 

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    useEffect(() => {
        if((!props.block && (turn !== props.turn || props.playerId !== playerId) && props.value !== 0) || round !== props.round){
            rolling(props.value);
        } else if (props.value === 0){
            setNb(0);
        }
    },[props]);

    async function rolling(value){
        setAnim(false);
        let array = shuffle([3, 4, 1, 6, 2, 5, 1, 2, 3, 5, 3, 1, 4, 2, 6, 4, 1, 5, 2, 4]);
        if(props.value !== 0){
            for(let i = 0; i < array.length; i++){
                setDiceValue(array[i]);
                await sleep(100);
            }
        }
        setNb(value);
        setDiceValue(0);
        setRound(props.round);
        setAnim(true);
        setTurn(props.turn);
        if(props.playerId !== playerId) setPlayerId(props.playerId);
        return;
    }

   
    const block = () => {
        if(nb !== 0 && props.canPlay && !props.nenette){
            props.setBlock();
        }
    }


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
                return <Default />
        }
    }

    return(
        <Container animation={anim} isBlocked={props.value === 0 || props.block} onClick={block}>
            {
                Number((diceValue === 0) ? nb : diceValue)
            }
        </Container>
    );
}
export default Dice;