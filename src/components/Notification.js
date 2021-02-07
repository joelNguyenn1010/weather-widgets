import { useSelector } from 'react-redux';
import styled, { keyframes } from "styled-components";

const Notification = () => {
    const { message } = useSelector(state => state.notificationReducer)

    return (message && message.length > 0) ? <NotificationContainer>
       <Message>{message}</Message>
    </NotificationContainer> : '';
}


const appearFromTop = keyframes`
    from {
        transform: scaleY(0); 
    }

    to {
        transform: scaleY(1);
    }
`

const NotificationContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f8d7da;
    transform-origin: top;
    animation: ${appearFromTop} .3s ease;
`

const Message = styled.p`
    color: #721c24;
    font-size: 1.5rem;
    text-transform: capitalize;
`

export default Notification