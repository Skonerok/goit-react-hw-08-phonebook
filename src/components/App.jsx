// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from 'redux/operation';
// import { selectError } from 'redux/selectors';
// import toast, { Toaster } from 'react-hot-toast';
// import css from './App.module.css';


// export const App = () => {
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts())

//        if (error) {
//     toast.error('Something went wrong');
//   };
//   }, [dispatch, error]);


//   return (
//     <>
//       <div><Toaster/></div>
//       <h1 className={css.phonebook__title}>Phonebook</h1>
//       <ContactForm  />
//       <h2 className={css.phonebook__title}> Contacts</h2>
//       <Filter
//       />
//       <ContactsList
//       />
//     </>
//   );
// }

// ==================================================================================

import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { Layout } from "./Layout";
import HomePage from "Pages/HomePage";
import { RestrictedRoute } from "./RestrictedRoute";
import RegisterPage from "Pages/RegisterPage";
import LoginPage from "Pages/LoginPage";
import ContactsPage from "Pages/ContactsPage";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
        />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
        />
        <Route path="/contacts" element={<RestrictedRoute redirectTo="/login" component={<ContactsPage />} />
        }
          />
          </Route>
      </Routes>
    );
};