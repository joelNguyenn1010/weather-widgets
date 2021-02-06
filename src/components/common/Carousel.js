import styled from "styled-components";

const Carousel = ({children}) => {
    return (
        <Container>
            <Scroller>
                {children}
            </Scroller>
        </Container>

    )
}

const Container = styled.div`
    max-width: 915px;
    margin: auto;
`;


const Scroller = styled.div`
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
`;

export default Carousel;