import React, { useState } from 'react'
import Mobile from './Mobile';
import Web from './Web';

function Header() {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo"> Overreacted </div>
            <div className="menu">
                <div className="web__menu">
                    <Web />
                </div>
                <div className="mobile__menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <i class="fi fi-rr-apps menu__icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header;
