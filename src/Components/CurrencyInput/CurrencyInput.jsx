import PropTypes from "prop-types";
import { v4 } from "uuid";
import css from './CurrencyInput.module.css';

function CurrencyInput(props) {
  const {
    onValueChange,
    onCurrencyChange,
    currencies,
    value,
    selectedCurrency,
  } = props;

  return (
  
    <div className={css.form__wrapper}>
      <input
        className={css.form__input}
        type="number"
        value={value}
        onChange={event => onValueChange(event.target.value)}
      />
      
      <select
        className={css.form__select}
        value={selectedCurrency}
        onChange={event => onCurrencyChange(event.target.value)}
      >
        {currencies.map((currency => (
          <option 
            className={css.form__option}
            key={v4()} 
            value={currency}>
              {currency}
          </option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;