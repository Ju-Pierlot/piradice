import React  from "react";
import {
    DefaultContainer
} from "../components/defaultElements";
import Ocean from "../components/ocean";
import Welcome from "../components/welcome";
import Home from "../components/home";


function IndexPage(){

    return(
        <DefaultContainer>
            <Welcome />
            <Home />
            <Ocean forGame={false}/>
        </DefaultContainer>
    );
}
export default IndexPage;