import { useEffect } from "react";
import RateTable from "../RateTable/RateTable";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import css from "./Header.module.css";


const Header = ({rates}) => {
    useEffect(() => {
    }, [rates]);

        return (
            <header className={css.header}>
                <Title
                    text="My Converter"
                />
                <SubTitle
                    text="Recent currency rate (Buy/Sale):"
                    />                    
                <RateTable
                    rates={rates}
                />
            </header> 
)
            
                // <header>
                //     <Title
                //         text="My Converter"
                //     />
                //     <SubTitle
                //         text="Recent currency rate (Buy/Sale):"
                //         />                    
                //     <RateTable
                //         rates={rates}
                //     />
                // <header/> 
                

};
export default Header;