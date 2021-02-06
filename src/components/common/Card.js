import styled from "styled-components";

const Card = (props) => {
  return (
    <Body {...props}>
      {props.children}
    </Body>
  );
}

const Body = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundColor}

`;


export default Card;
