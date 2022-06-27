import propTypes from "prop-types";
import css from './Wrapper.module.css';

export default function Wrapper(props) {
  return (
    <div className={css.layout}>
      {props.children}
    </div>

  );
};

Wrapper.propTypes = {
  children: propTypes.element.isRequired,
};