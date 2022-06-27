import propTypes from 'prop-types';
import { BsCurrencyExchange } from 'react-icons/bs';
import css from "./Title.module.css";


const Title = ({ text }) => {
    return (
        <h1 className={css.header__title}>
            <BsCurrencyExchange/>
            {text}
        </h1>
    )
};

Title.propTypes = {
    text: propTypes.string.isRequired,
};

export default Title;