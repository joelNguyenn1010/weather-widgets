import styled from "styled-components";

export default styled.button`
    padding: 0.7rem;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    border: none;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
        opacity: 0.9;
    }
`