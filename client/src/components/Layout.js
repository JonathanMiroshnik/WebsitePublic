import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar/NavBar.js";
import { ContactBar } from "./ContactBar/ContactBar.js";

export function Layout() {
    return (
        <>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <br/>
            <main>
                <Outlet />
            </main>
            <br/>
            <br/>
            <ContactBar />
        </>
    );
}

export default Layout;