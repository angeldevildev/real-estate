'use client'

import React from 'react'
import './MobileNavbar.css'
import { useState } from 'react';

function MobileNavbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
  return (
    <div>
      <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                About Us
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Projects
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Agents
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Services
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#download">
                Listings
              </a>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar