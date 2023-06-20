import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{textAlign: 'center', color: '#1A1B4B', fontSize: '27px'}}>Phonebook</h2>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2 style={{textAlign: 'center', color: '#1A1B4B', fontSize: '27px'}}>Contacts:</h2>
      <ContactsList />
    </div>
  );
}