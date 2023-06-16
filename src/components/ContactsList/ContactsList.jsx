import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import css from './ContactList.module.css';

export function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
  if (contacts && filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
    return contacts;
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
    <ul className={css.phonebook__list}>
        {getFilteredContacts() && getFilteredContacts().map(({ id, name, number }) => (
          <li className={css.phonebook__item} key={id}>
            <span>{name}</span>:
            <span>{number}</span>
            <button
              className={css.phonebook__delete}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
      ))}
      </ul>
      </>
  );
  };