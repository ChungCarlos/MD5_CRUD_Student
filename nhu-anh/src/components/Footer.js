import React from 'react';
export function Footer() {
    return (
        <footer className="footer"> {/* Sử dụng className thay vì style */}
            <h1>Create By: ChungCarlos</h1>
            <hr />
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
}

