import React from 'react';

const Header = () => (
    <header style={{ backgroundColor: '#aed8e5 ' }} >
        <nav  style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <a href='#home'>Home</a>
            {/* <a href='#project'>Project</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Contact</a> */}
        </nav>
    </header>
);
export default Header;