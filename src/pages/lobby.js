import React from "react";
import {
    DefaultContainer
} from "../components/defaultElements";
import Ocean from "../components/ocean";
import Lobby from "../components/lobby";
import { useParams } from "react-router-dom";


function LobbyPage(){
    const {id} = useParams();

    return(
        <DefaultContainer>
            <Lobby code={id} />
            <Ocean forGame={false}/>
        </DefaultContainer>
    );
}
export default LobbyPage;