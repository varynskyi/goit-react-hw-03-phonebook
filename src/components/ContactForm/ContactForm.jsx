import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  change = (event) => {
    const { name, number, value } = event.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };

  formSubmit = (event) => {
    event.preventDefault();
    let nameId = uuidv4();
    const newState = {
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    };

    this.props.formSubmit(newState);
    this.setState({
      contacts: [],
      filter: "",
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={s.container} onSubmit={this.formSubmit}>
        <label className={s.label}>Name</label>
        <input
          className={s.input}
          type="text"
          id="inputName"
          name="name"
          value={this.state.name}
          onChange={this.change}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label}>Number</label>
        <input
          className={s.input}
          id="inputNumber"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.change}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func,
};

export default ContactForm;
