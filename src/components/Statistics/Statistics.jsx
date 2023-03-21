import PropTypes from 'prop-types';
import {ContainerStatictics, StatisticsItemsRef} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ContainerStatictics>
            <StatisticsItemsRef>Good: {good}</StatisticsItemsRef>
            <StatisticsItemsRef>Neutral: {neutral}</StatisticsItemsRef>
            <StatisticsItemsRef>Bad: {bad}</StatisticsItemsRef>
            <StatisticsItemsRef>Total: {total}</StatisticsItemsRef>
            <StatisticsItemsRef>Positive feedback: {positivePercentage}</StatisticsItemsRef>
        </ContainerStatictics>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string
}

