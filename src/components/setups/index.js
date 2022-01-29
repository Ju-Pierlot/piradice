import {
    LoadingTitle,
    Container,
    CodeTitle,
    Code,
    PlayersTitle,
} from "./setupsElements";
import React, { useEffect, useState, useCallback } from "react";
import {auth, db} from '../../firebase';
import Loading from "../loading";
import {
    useAuthState
} from 'react-firebase-hooks/auth';
import { useSelector} from "react-redux";
import { stateSelector } from '../../store/stateSelectors';
import { cutString, generate8Characters } from "../../math";
import {useDispatch} from 'react-redux';
import { generateStateAction } from '../../store/stateActions';
import Players from "./players";


function Setups(){
    const state = useSelector(stateSelector);
    const [animation, setAnimation] = useState(false);
    const [code, setCode] = useState(null);

    const dispatch = useDispatch();
    const onGenerate = useCallback((state) => {
    dispatch(generateStateAction(state))
    }, []);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    useEffect(() => {
        if(state.game_id !== null){
            setCode(state.game_id);
            db.ref(state.game_id).update({status: 'open'});
        } else {
            setCodeToServer();
        }
        anim_f();
    }, []);
    const anim_f= async () => {
        const resp = await sleep(2000);
        setAnimation(true);
    };
    function setCodeToServer(){
        let code = generate8Characters();
        db.ref(code).update({game_id: code, status: 'open'});
        onGenerate({game_id: code, player_id: null});
        setCode(code);
    }

    function LoadingState(){
        return(
            <>
                <Loading />
                <LoadingTitle>Your game is being created...</LoadingTitle>
            </>
        );
    }
    function Loaded(){
        return(
            <>
            <Container>
                <CodeTitle>Your code is :</CodeTitle>
                <Code>{cutString(code)}</Code>
                <PlayersTitle>Waiting for players...</PlayersTitle>
                <Players code={code} showButton={true}/>
            </Container>
            </>
        );
    }
    return(
        <>
            {
                (code && animation) ? Loaded() : LoadingState()
            }
        </>
    );
}
export default Setups;