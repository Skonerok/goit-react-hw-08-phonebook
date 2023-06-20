import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import css from './Layout.module.css';

export const Layout = () => {
    return (
        <div className={css.container}>
            <Toaster />
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
}