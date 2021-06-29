import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #212121 grey darken-4">
                <a href="#" className="brand-logo">Mini Paint</a>
                <ul id="nav-mobile" className="right">
                    <Link className="waves-effect waves-light btn #5e35b1 deep-purple darken-1" to='/'>Sign Out
                    </Link>
                </ul>
            </div>
        </nav>

    );
};

export default Header;