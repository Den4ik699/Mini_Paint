import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #212121 grey darken-4">
                <a href="#" className="brand-logo">Mini Paint</a>
                <ul id="nav-mobile" className="right">
                    <a className="waves-effect waves-light btn #5e35b1 deep-purple darken-1">Sign Out</a>
                </ul>
            </div>
        </nav>
    );
};

export default Header;