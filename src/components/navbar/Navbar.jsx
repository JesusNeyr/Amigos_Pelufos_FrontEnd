import React from "react";
import Logo from './Logo.jsx'
import Banner from './Banner.jsx'
import SearchForm from './SearchForm.jsx'
import Navmenu from './Navmenu.jsx'


function Navbar() {
    return(
        <>
            <header className="header-top">
                <div className="header-container">
                    <Logo/>
                    <Banner/>
                </div>
                <SearchForm/>
            </header>
            <Navmenu/>
        </>
    )
}
export default Navbar;