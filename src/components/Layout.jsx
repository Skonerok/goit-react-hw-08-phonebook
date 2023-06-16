import { Suspense } from "react"
import { AppBar } from "./AppBar"
import { Outlet } from "react-router-dom"
// import { Toaster } from "react-hot-toast"




export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            {/* <Toaster /> */}
        </div>
    )
}