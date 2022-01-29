import React from "react";
import {
    DefaultContainer
} from "../components/defaultElements";
import Ocean from "../components/ocean";
import Setups from "../components/setups";


function SetupsPage(){

    return(
        <DefaultContainer>
            <Setups />
            <Ocean forGame={false}/>
        </DefaultContainer>
    );
}
export default SetupsPage;