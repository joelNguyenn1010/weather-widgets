import styled from "styled-components";

const Select = ({children, selected, index}) => {
    const Wrapper = selected === index ? SelectedElement : NotSelectedElement

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}


const NotSelectedElement = styled.div`
    opacity: 0.7;
`

const SelectedElement = styled.div`
    opacity: 1;
`

export default Select;