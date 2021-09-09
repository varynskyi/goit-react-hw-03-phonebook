import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, change }) => {
  return (
    <div className={s.container}>
      <p className={s.label}>Find contact</p>
      <input
        type="text"
        className={s.input}
        name="filter"
        onChange={change}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
};

export default Filter;
