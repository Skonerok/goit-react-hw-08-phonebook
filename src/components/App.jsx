import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operation';
import { selectError } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import css from './App.module.css';


export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())

       if (error) {
    // toast.error(`${error.message}`);
    toast.error('Something went wrong');
  };
  }, [dispatch, error]);


  return (
    <>
      <div><Toaster/></div>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm  />
      <h2 className={css.phonebook__title}> Contacts</h2>
      <Filter
      />
      <ContactsList
      />
    </>
  );
}