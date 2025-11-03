import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            
            <Link to='/'>
              <div className="logo">
                <img src="/img/logoharduer.png" alt="logo" />
      </div>
            </Link>

            <div className="categories">
                {/* El comando NavLink lo uso para saber en qué categoría estamos */}
                <NavLink to={`/category/laptops`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Laptops</NavLink>
                <NavLink to={`/category/celulares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablets`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
