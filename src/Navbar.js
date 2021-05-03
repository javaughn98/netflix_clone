import React, { useState, useEffect }from 'react';
import './Navbar.css'

function Navbar() {

    const[nav, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className = {`navbar ${nav && "dark"}`}>
            <img className = "netflix_img" src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "Netflix Logo"/>
            <img className = "avatar" src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "Avatar Logo"/>
            
        </div>
    )
}

export default Navbar
