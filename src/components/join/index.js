import React, { useEffect, useState } from "react";
import {
    Container,
    Title,
    InputContainer,
    Input,
    LineContainer,
    Line,
    StartButtonContent,
    Dice,
    Arrow,
    DefaultButtonContainer,
    ErrorMessage
} from "./joinElements";
import Setups from "./setups";
import {db} from '../../firebase';

function Join(){
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [display, setDisplay] = useState(false);
    const [gameValid, setGameValid] = useState(false);
    const [error, setError] = useState(null);
    let input1, input2, input3, input4;

   

    useEffect(() => {
        if(code1.length < 2){
            input1.focus();
        } else if(code2.length < 2){
            input2.focus();
        } else if(code3.length < 2){
            input3.focus();
        } else if(code4.length < 2){
            input4.focus();
        }
        if(code1.length === 2 && code2.length === 2 && code3.length === 2 && code4.length === 2){
            setDisplay(true);
        } else setDisplay(false);
    });

    function onChangeCode1(value){
        if(value.length < 3){
            setCode1(value.toUpperCase());
        }
    }
    function onChangeCode2(value){
        if(value.length < 3){
            setCode2(value.toUpperCase());
        }
    }
    function onChangeCode3(value){
        if(value.length < 3){
            setCode3(value.toUpperCase());
        }
    }
    function onChangeCode4(value){
        if(value.length < 3){
            setCode4(value.toUpperCase());
        }
    }
    const onJoinClick = () => {
        let codeJoin = code1 + code2 + code3 + code4;
        db.ref(codeJoin).on('value',(snap)=>{
            let data = snap.val();
            if(data){
                if(data.status === 'open'){
                    setGameValid(true);
                } else {
                    setError("Game already started");
                }
            } else {
                setError("Game don't exist");
            }
          });
    }
    function displayEnterCode(){
        return(
        <Container>
            <Title>Enter a game code :</Title>
            {
                error && <ErrorMessage>{error}</ErrorMessage>
            }
            <InputContainer>
                <Input type="text" value={code1} onChange={(value) => onChangeCode1(value.target.value)} ref={(input) => { input1 = input; }} />
                <LineContainer>
                    <Line>-</Line>
                </LineContainer>
                <Input type="text" value={code2} onChange={(value) => onChangeCode2(value.target.value)} ref={(input) => { input2 = input; }}/>
                <LineContainer>
                    <Line>-</Line>
                </LineContainer>
                <Input type="text" value={code3} onChange={(value) => onChangeCode3(value.target.value)} ref={(input) => { input3 = input; }}/>
                <LineContainer>
                    <Line>-</Line>
                </LineContainer>
                <Input type="text" value={code4} onChange={(value) => onChangeCode4(value.target.value)} ref={(input) => { input4 = input; }}/>
            </InputContainer>
            <DefaultButtonContainer>
            {
                display && 
                <StartButtonContent onClick={onJoinClick}>
                <Dice />
                <Arrow />
                Join game
            </StartButtonContent>
            }
            </DefaultButtonContainer>
        </Container>
        );
    }
    return(
        gameValid ? <Setups code={code1 + code2 + code3 + code4}/> : displayEnterCode()
    );
}
export default Join;