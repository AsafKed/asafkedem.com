import React from "react";
import '../style.css';

function Menu() {
    return (
        <div className="menu_bar">
            <a href="/" className="menu_item">Home</a>
            <div className="menu_items">
                <a href="/skills" className="menu_item">Skills</a>
                <a href="/about" className="menu_item">About me</a>
            </div>
        </div>
    )
}

export default Menu;