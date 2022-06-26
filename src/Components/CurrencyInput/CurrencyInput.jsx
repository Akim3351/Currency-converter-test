import PropTypes from "prop-types";
import { v4 } from "uuid";

function CurrencyInput(props) {
  const {
    onValueChange,
    onCurrencyChange,
    currencies,
    value,
    selectedCurrency,
  } = props;

  return (
  
    <div className="group">
      <input
        type="number"
        value={value}
        onChange={event => onValueChange(event.target.value)}
      />
      
      <select
        value={selectedCurrency}
        onChange={event => onCurrencyChange(event.target.value)}
      >
        {currencies.map((currency => (
          <option key={v4()} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  value: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;