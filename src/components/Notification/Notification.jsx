import PropTypes from 'prop-types';
import {ContainerNotification, MessageNotification} from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
    return (
    <ContainerNotification>
            <MessageNotification>{ message }</MessageNotification>
    </ContainerNotification>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}