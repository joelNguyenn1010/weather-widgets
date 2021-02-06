import styled, {keyframes} from "styled-components";
import Button from '../common/Button';
const ThemeToggle = (props) => {
    return <Wrapper><Button onClick={props.onClick}>Toggle Theme</Button></Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
`

export default ThemeToggle;