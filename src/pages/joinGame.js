import React from "react";
import{
    DefaultContainer
} from "../components/defaultElements";
import Ocean from "../components/ocean";
import Join from "../components/join";

function JoinGamePage(){

    return(
        <DefaultContainer>
            <Join />
            <Ocean forGame={false}/>
        </DefaultContainer>
    );
}
export default JoinGamePage;