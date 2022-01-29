import React, { useState } from "react";
import {
    Container,
    Title,
    StartButtonContent,
    StartLink,
    Pirate,
    Dice,
    Arrow,
    DefaultButtonContainer
} from "../joinElements";
import {
    InputContainer,
    Input,
    CharactersContainer,
    CharacterContainer,
    ButtonCharacter,
    ImgPirate
} from "./setupsElements";
import {db} from '../../../firebase';
import p1 from "../../../images/pirate_1.jpg";
import p2 from "../../../images/pirate_2.jpg";
import p3 from "../../../images/pirate_3.jpg";
import p4 from "../../../images/pirate_4.jpg";
import p5 from "../../../images/pirate_5.jpg";
import p6 from "../../../images/pirate_6.jpg";
import { uuidv4 } from "../../../math";
import { useCallback } from "react";
import {useDispatch} from 'react-redux';
import { generateStateAction } from '../../../store/stateActions';

function Setups(props){
    const [name, setName] = useState("");
    const [imgId, setImgId] = useState(0);
    const [next, setNext] = useState(false);

    const dispatch = useDispatch();
    const onGenerate = useCallback((state) => {
        dispatch(generateStateAction(state))
        }, []);

    const settingName = (value) => {
        if(value.length < 11){
            setName(value);
        }
    }

    const onImageClick = (value) => {
        setImgId(value);
    }

    const validUser = () => {
        let uuid = uuidv4();
        onGenerate({game_id: null, player_id: uuid});
        db.ref(props.code + "/players/" + uuid).update({
            name: name,
            img: imgId,
            id: uuid,
            points: 0
        });
    }

    function displaySuit(){
        return(
            <>
            <Title>Choose your character :</Title>
            <CharactersContainer>
                <ButtonCharacter onClick={() => onImageClick(0)}>
                    <CharacterContainer selected={imgId === 0}>
                        <ImgPirate src={p1} />
                    </CharacterContainer>
                </ButtonCharacter>
                <ButtonCharacter onClick={() => onImageClick(1)}>
                    <CharacterContainer selected={imgId === 1}>
                        <ImgPirate src={p2} />
                    </CharacterContainer>
                </ButtonCharacter>
                <ButtonCharacter onClick={() => onImageClick(2)}>
                    <CharacterContainer selected={imgId === 2}>
                        <ImgPirate src={p3} />
                    </CharacterContainer>
                </ButtonCharacter>
                <ButtonCharacter onClick={() => onImageClick(3)}>
                    <CharacterContainer selected={imgId === 3}>
                        <ImgPirate src={p4} />
                    </CharacterContainer>
                </ButtonCharacter>
                <ButtonCharacter onClick={() => onImageClick(4)}>
                    <CharacterContainer selected={imgId === 4}>
                        <ImgPirate src={p5} />
                    </CharacterContainer>
                </ButtonCharacter>
                <ButtonCharacter onClick={() => onImageClick(5)}>
                    <CharacterContainer selected={imgId === 5}>
                        <ImgPirate src={p6} />
                    </CharacterContainer>
                </ButtonCharacter>
            </CharactersContainer>
                {
                    (name.length > 0) && 
                    <StartLink onClick={validUser} to={"/game-lobby/" + props.code}>
                        <Dice />
                        <Arrow />
                        Let's go
                    </StartLink>
                }
            </>
        );
    }
    function displayName(){
        return(
            <>
            <Title>Enter your name :</Title>
            <InputContainer>
                <Input type="text" value={name} onChange={(value) => settingName(value.target.value)}/>
            </InputContainer>
            <DefaultButtonContainer>
                {
                    (name.length > 0) && 
                    <StartButtonContent onClick={() => setNext(true)}>
                        <Pirate />
                        <Arrow />
                        Next
                    </StartButtonContent>
                }
            </DefaultButtonContainer>
            </>
        );
    }

    return(
        <Container>
            {
                next ? displaySuit() : displayName()
            }
        </Container>
    );
}
export default Setups;