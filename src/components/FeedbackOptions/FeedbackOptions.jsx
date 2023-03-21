import PropTypes from 'prop-types';
import {ListOptionsRef, ListItemsOptionsRef, ButtonOptionsRef} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<ListOptionsRef>
        {options.map(optionKey => {
            return <ListItemsOptionsRef key={optionKey}>
                <ButtonOptionsRef type="button" name={optionKey} onClick={onLeaveFeedback}>{ optionKey }</ButtonOptionsRef>
                    </ListItemsOptionsRef>
        })}
    </ListOptionsRef>)
}

Notification.propTypes = {
    message: PropTypes.string
}