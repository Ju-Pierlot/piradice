import React from "react";
import Board from "../components/board";
import { useParams } from "react-router-dom";


function GamePage(){
    const {id} = useParams();

    return(
        <>
            <Board forGame={true} code={id}/>
        </>
    );
}
export default GamePage;