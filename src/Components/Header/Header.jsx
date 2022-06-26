import { useEffect } from "react";
import { v4 } from "uuid";
import { propTypes } from 'prop-types';


export default function Header({ rates }) {
    useEffect(() => {
    }, [rates]);

    
    return (
    rates.length !== 0 ?
            <>
                <h1>My Simple Converter</h1>
                <div>
                <h2>Recent currency rate (Buy/Sale):</h2>
                    {rates.length > 0 &&
                        (<ul>
                            {rates.map(rate => {return (
                                <li key={v4()}>
                                    <span>1 {rate.ccy}:</span>
                                    <span> {rate.normalizedBuyValue} {rate.base_ccy} /</span>
                                    <span> {rate.normalizedSaleValue} {rate.base_ccy}</span>
                                </li>
                            )})
                            }
                        </ul>)}
                </div>
            </>
            :
            <h1>Loading...</h1>
        );
};

Header.propTypes = {
    rates: propTypes.arrayOf(
        propTypes.shape({
            ccy: propTypes.string,
            base_ccy: propTypes.string,
            normalizedBuyValue: propTypes.string,
            normalizedSaleValue: propTypes.string,
        })
    ),
};

