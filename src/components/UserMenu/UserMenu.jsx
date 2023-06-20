import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.container}>
            <p>Welcome, <b className={css.username}>{user.name}</b></p>
            <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};