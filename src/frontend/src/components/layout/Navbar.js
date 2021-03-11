import React from 'react';
import { Link } from 'react-router-dom';
import { PREFIX } from '../../config';

const Navbar = () => {
  return (
    <nav id='sidebar' className='bg-primary text-light'>
      <div class='sidebar-header'>
        <h3>Bootstrap Sidebar</h3>
      </div>

      <ul class='list-unstyled components'>
        <p>Dummy Heading</p>
        <li class='active'>
          <Link to={`${PREFIX}/`}>Kezdőlap</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/accounts`}>Számlák</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/expenditures`}>Kiadás</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/income`}>Bevétel</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/stats`}>Statisztika</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/milestones`}>Mérföldkövek</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/register`}>Regisztráció</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/login`}>Bejelentkezés</Link>
        </li>
        <li>
          <Link to={`${PREFIX}/settings`}>Beállítások</Link>
        </li>
        {/* <a
            href='#homeSubmenu'
            data-toggle='collapse'
            aria-expanded='false'
            class='dropdown-toggle'
          >
            Home
          </a>
          <ul class='collapse list-unstyled' id='homeSubmenu'>
            <li>
              <a href='#'>Home 1</a>
            </li>
            <li>
              <a href='#'>Home 2</a>
            </li>
            <li>
              <a href='#'>Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a
            href='#pageSubmenu'
            data-toggle='collapse'
            aria-expanded='false'
            class='dropdown-toggle'
          >
            Pages
          </a>
          <ul class='collapse list-unstyled' id='pageSubmenu'>
            <li>
              <a href='#'>Page 1</a>
            </li>
            <li>
              <a href='#'>Page 2</a>
            </li>
            <li>
              <a href='#'>Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>Portfolio</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
