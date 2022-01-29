import {
    LoadingTitle,
    Container,
    PlayersTitle,
} from "../setups/setupsElements";
import {db} from '../../firebase';
import React, { useState, useEffect } from "react";
import Players from "../setups/players";
import { Navigate } from "react-router-dom";


function Lobby(props){
    const [code, setCode] = useState(props.code);
    const [start, setStart] = useState(false);

    useEffect(() => {
        db.ref(props.code + "/status").on('value',(snap)=>{
            let data = snap.val();
            if(data){
                if(data === 'started'){
                    setStart(true);
                }
            }
          });
    }, []);

    function Loaded(){
        return(
            <>
            <Container>
                {start && <Navigate to={"/game/" + code}/>}
                <PlayersTitle>Waiting for players...</PlayersTitle>
                <Players code={code} showButton={false}/>
            </Container>
            </>
        );
    }
    return(
        <>
            {
                Loaded()
            }
        </>
    );
}
export default Lobby;