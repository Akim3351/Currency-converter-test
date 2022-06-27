import propTypes from 'prop-types';
import css from './SubTitle.module.css';

const SubTitle = ({ text }) => {
    return (
        <h2 className={css.subtitle}>
            {text}
        </h2>
    )
};

SubTitle.propTypes = {
    text: propTypes.string.isRequired,
};

export default SubTitle;