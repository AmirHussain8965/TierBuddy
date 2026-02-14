import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='header_section'>
      <div className="container">
        <div className="navbar_inner_main">
          <nav className={`navbar navbar-expand-lg`}>
            <Link href="/" className={`navbar-brand`}>
              TierListMaker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className={`navbar-nav mx-auto gap-3`}>
                <li className="nav-item">
                  <Link href="/tierlist" className="nav-link">
                    Tier List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/categories" className="nav-link">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/forum" className="nav-link">
                    Forum
                  </Link>
                </li>
              </ul>
              <div className="navbar_btns">
                <Link href="/login" className="navbar_btn1">
                  Login
                </Link>
                <Link href="/create" className="navbar_btn2">
                  + Create
                   
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}