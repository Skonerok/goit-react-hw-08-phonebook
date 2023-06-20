import { useAuth } from "hooks/useAuth";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/authOperations";
import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
// import HomePage from "Pages/HomePage";
// import RegisterPage from "Pages/RegisterPage";
// import LoginPage from "Pages/LoginPage";
// import ContactsPage from "Pages/ContactsPage";

const HomePage = lazy(() => import('../Pages/HomePage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));

export function App() {
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
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
          />
          </Route>
      </Routes>
    );
};