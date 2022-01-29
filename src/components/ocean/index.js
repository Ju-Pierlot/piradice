import {
    Container,
    OceanContainer,
    Wave1,
    Wave2,
    Wave3,
    Boat
} from "./oceanElements";

function Ocean(props){
    return(
        <Container>
            <OceanContainer>
                <Wave1/>
                {
                    props.forGame && <Boat />
                }
                <Wave2/>
                <Wave3/>
            </OceanContainer>
        </Container>
    );
}
export default Ocean;