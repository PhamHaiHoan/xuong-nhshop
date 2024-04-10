// import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="header">
    <div className="container">
      <div className="header-inner">
        <Link to="/" className="header__logo">
          <img src="../img/logohome.svg" alt='' />
        </Link>
        <div className="button-mobile"><button>=</button></div>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <Link to="/" className="main-menu__link">Home</Link>
            </li>
            <li className="main-menu__item">
              <Link to="/shop" className="main-menu__link">Shop</Link>
            </li>
            <li className="main-menu__item">
              <Link to="/about" className="main-menu__link">About</Link>
            </li>
            <li className="main-menu__item">
              <Link to="/contact" className="main-menu__link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-items">
          <div className="header-item-user">
            <Link to="/signup"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg></Link>
          </div>
          <div className="header-item-user">
            <Link to=""><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></Link>
          </div>
          <div className="header-item-user">
            <Link to=""><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg></Link>
          </div>
          <div className="header-item-user">
            <Link to="cart"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg></Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*---------- kết thúc </header>---------- */}
    </>
  )
}

export default Header