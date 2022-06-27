import { v4 } from "uuid";
import propTypes from "prop-types";
import css from './RateTable.module.css';

export default function RateTable ({rates}) {

    return (
        <ul className={css.rate__list}>
        {rates.map(rate => {return (
            <li 
                key={v4()}
                className={css.rate__item}
            >
                <span>1 {rate.ccy}:</span>
                <span> {rate.normalizedBuyValue} {rate.base_ccy} /</span>
                <span> {rate.normalizedSaleValue} {rate.base_ccy}</span>
            </li>
        )})
        }
</ul>

    )
};

RateTable.propTypes = {
    rates: propTypes.arrayOf(propTypes.shape({
        ccy: propTypes.string,
        base_ccy: propTypes.string,
        normalizedBuyValue: propTypes.string,
        normalizedSaleValue: propTypes.string,
    }))
};
