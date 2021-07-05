import React from 'react';
import {Link} from 'react-router-dom'

const style = require('./Header.module.css');


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #212121 grey darken-4">
                <Link to ="/main" className="brand-logo">Mini Paint</Link>
                <ul id="nav-mobile" className="right">
                    <li className={style.liElem}><Link to ='/main' href="#">Home</Link></li>
                    <li className={style.liElem}><Link to ="/savedPictures">Pictures</Link></li>
                    <Link className="waves-effect waves-light btn #5e35b1 deep-purple darken-1" to='/'>Sign Out
                    </Link>
                </ul>
            </div>
        </nav>

    );
};

export default Header;