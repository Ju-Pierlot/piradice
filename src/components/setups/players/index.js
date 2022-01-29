import React, {useEffect, useState} from "react";
import {
    PlayersContainer,
    PlayerContainer,
    ImgContainer,
    ImgForm,
    Img,
    NameContainer,
    Name,
    StartButton,
    StartButtonContent,
    Dice,
    Arrow
} from "./playersElements";
import p1 from "../../../images/pirate_1.jpg";
import p2 from "../../../images/pirate_2.jpg";
import p3 from "../../../images/pirate_3.jpg";
import p4 from "../../../images/pirate_4.jpg";
import p5 from "../../../images/pirate_5.jpg";
import p6 from "../../../images/pirate_6.jpg";
import {db} from '../../../firebase';

function Players(props){
    const [imgs, setImgs] = useState([p1, p2, p3, p4, p5, p6]);
    const [plyrs, setPlyrs] = useState([]);

    useEffect(() => {
        db.ref(props.code + "/players").limitToLast(4).on('value',(snap)=>{
            let data = snap.val();
            if(data){
                setPlyrs(Object.values(snap.val()));
            }
          });
    }, []);

    const go = () => {
        db.ref(props.code).update({status: 'started'});
    }

    function playersList(){
        return(
            plyrs.map((p, i) => {
                return(
                    <PlayerContainer key={i}>
                        <ImgContainer>
                            <ImgForm>
                                <Img src={imgs[p.img]} />
                            </ImgForm>
                        </ImgContainer>
                        <NameContainer>
                            <Name>{p.name}</Name>
                        </NameContainer>
                    </PlayerContainer>
                );
            })
        );
    }
    return(
                <PlayersContainer>
                    {playersList()}
                    {
                        (plyrs.length > 1 && props.showButton) &&
                        <StartButton to={"/game/" + props.code} onClick={go}>
                        <StartButtonContent>
                            Start game
                            <Dice />
                            <Arrow />
                        </StartButtonContent>
                    </StartButton>
                    }
                </PlayersContainer>
    );
}
export default Players;
