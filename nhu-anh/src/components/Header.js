import React from 'react';

export function Header() {
    return (
        <header className="header"> {/* Sử dụng className thay vì style */}
            <img src="DL4.jpg" alt="Logo" className="logo" style={{height:500,width:1500}} />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
