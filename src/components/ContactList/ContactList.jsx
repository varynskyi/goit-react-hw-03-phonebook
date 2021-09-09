import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ getContacts, deleteContact }) => {
  return (
    <div className={s.container}>
      <ul>
        {getContacts.map((elem) => (
          <li key={elem.id} className={s.item}>
            <span>
              {elem.name}: {elem.number}
            </span>
            <button
              className={s.btn}
              type="submit"
              onClick={() => deleteContact(elem)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.array.isRequired,
  deleteeContact: PropTypes.func,
};

export default ContactList;
