import React, {useEffect, useState} from "react";
import {
    Container,
    MessageContent
} from "./messageElements";

function Message(props){
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(0);
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        if(props.change !== status){
            setMessage(props.message);
            setStatus(props.change);
            setAnim(false);
            waitAnim();
        }
    },[props]);
    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    const waitAnim = async () => {
        await sleep(4000);
        setAnim(true);
    }

    return(
        <Container>
            {(status % 2 === 0) ? <MessageContent animatio={anim}>{message}</MessageContent> : <MessageContent animatio={anim}>{message}</MessageContent>}
        </Container>
    );
}
export default Message;