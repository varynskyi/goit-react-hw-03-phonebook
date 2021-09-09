import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import s from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Denzel Hayes Washington Jr", number: "459-12-56" },
      { id: "id-2", name: "Julia Roberts", number: "443-89-12" },
      { id: "id-3", name: "Jennifer Aniston", number: "645-17-79" },
      { id: "id-4", name: "Robert De Niro", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsed = JSON.parse(contacts);
    if (parsed) {
      this.setState({ contacts: parsed });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  change = (element) => {
    this.setState({
      filter: element.target.value,
    });
  };

  formSubmit = (item) => {
    const findContact = this.state.contacts.find(
      (contact) => contact.name === item.name
    );
    !findContact
      ? this.setState((prevState) => ({
          contacts: [item, ...prevState.contacts],
        }))
      : toast.error(`${item.name} is already in contacts`);
  };

  getContacts = () => {
    const inputN = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputN)
    );
  };

  deleteContact = (item) => {
    return this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== item.id),
    }));
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm formSubmit={this.formSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={this.state.filter} change={this.change} />
        <ContactList
          getContacts={this.getContacts()}
          deleteContact={this.deleteContact}
        />
        <ToastContainer />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default App;
