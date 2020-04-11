import React from 'react';
import '../css/footer.css';

const Footer = () => {
    const date = new Date();
    const getDate = date.getFullYear();
    return(
        <div>
            <footer>
                Copyright {getDate}
            </footer>
        </div>
    );
}

export default Footer;