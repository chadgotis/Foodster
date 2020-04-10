import React from 'react';
import '../css/nav.css';

const Nav = () => {
    return(
        <div>
            <nav>
                <ul className='navigation'>
                    <li className='logo'><a href='index.js'>Foodster</a></li>
                    <li><a href='https://github.com/chadgotis'>Git</a></li>
                    <li><a href='index.js'>About</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Nav;