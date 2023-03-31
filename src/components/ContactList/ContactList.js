import { deleteContact } from 'components/Redux/contactsSlice';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/Redux/selectors';

export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDeleteButton(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
