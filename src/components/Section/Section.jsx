import PropTypes from 'prop-types';
import {SectionRef, SectionTitle} from 'components/Section/Section.styled';



export const Section = ({ title, children }) => {
    return (
        <SectionRef>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionRef>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}