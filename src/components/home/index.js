import {
    SubTitle,
    BestDeveloper,
    ButtonContainer,
    LinkButton,
    HostIcon,
    GoIcon,
    JoinIcon
} from "./homeElements";
import React, { useState, useEffect } from "react";

function Home(){
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
          if(window.innerWidth < 850) setMobile(true);
          else setMobile(false);
        }
        window.addEventListener('resize', handleResize)
        handleResize();
      });

    return(
        <>
            <SubTitle>New online 421 game by <BestDeveloper>Julien Pierlot</BestDeveloper>!</SubTitle>
            {!mobile && 
                <LinkButton to="/game-setups">
                <ButtonContainer>
                    <HostIcon />
                    Host a game
                    <GoIcon />
                </ButtonContainer>
            </LinkButton>
            }
            <LinkButton to="/join-game">
                <ButtonContainer>
                    <JoinIcon />
                    Join a game
                    <GoIcon />
                </ButtonContainer>
            </LinkButton>
            
        </>
    );
}
export default Home;