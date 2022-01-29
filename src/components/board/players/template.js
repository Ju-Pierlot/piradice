import{
    LeftTop,
    LeftCenter,
    LeftBottom,
    RightTop,
    RightCenter,
    RightBottom,
    CenterCenter
} from "./playersElements";

export function One(){
    return(
        <>
            <CenterCenter />
        </>
    );
}
export function Two(){
    return(
        <>
            <LeftBottom />
            <RightTop />
        </>
    );
}
export function Three(){
    return(
        <>
            <LeftBottom />
            <CenterCenter />
            <RightTop />
        </>
    );
}
export function Four(){
    return(
        <>
            <LeftTop />
            <LeftBottom />
            <RightTop />
            <RightBottom />
        </>
    );
}
export function Five(){
    return(
        <>
            <LeftTop />
            <LeftBottom />
            <RightTop />
            <RightBottom />
            <CenterCenter />
        </>
    );
}
export function Six(){
    return(
        <>
            <LeftTop />
            <LeftCenter />
            <LeftBottom />
            <RightTop />
            <RightCenter />
            <RightBottom />
        </>
    );
}