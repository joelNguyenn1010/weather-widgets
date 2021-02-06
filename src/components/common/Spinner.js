import styled, {keyframes} from "styled-components";
import spinner from "./loading.svg";

const Spinner = () => {
    return <Container>
        <Loading src={spinner}/>
    </Container>
}


const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`

const Loading = styled.img`
    width: 10rem;
    height: 10rem;
    animation: ${spin} 0.7s linear infinite;
`

export default Spinner;