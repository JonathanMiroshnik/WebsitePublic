import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './NavBar.css';
import '../ContentContainer/ContentContainer.css';

export function NavBar() {
    return (
        <div className="contentContainer">
            <div className="navbar">
                <Icon icon="solar:armchair-outline" width="24" height="24" />
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/blog">
                    <button>Blog</button>
                </Link>
                {/* <Link to="/about">
                    <button>About</button>
                </Link> */}
                <Link to="/projects">
                    <button>Projects</button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
