import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/Redux/contactsSlice';
import { getContacts } from 'components/Redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

 const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);

        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in your contacts.`);

      return;
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
      <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={onFormChange}
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={onFormChange}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
}
