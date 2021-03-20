import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
          <div className={headerStyles.overlay}></div>
          <div className={headerStyles.heroContent}>
            <p className={headerStyles.brand}>
            </p>
            <p className={headerStyles.description}>
            </p>
          </div>
          <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.navList}>
              <li>
                <Link to="/" activeStyle={{ color: "aqua" }} activeClassName={headerStyles.activeMenuItem}>
                  Home
                </Link>
              </li>
              <li>
              <Link to="/about/" activeStyle={{ color: "aqua" }} activeClassName={headerStyles.activeMenuItem}>
                  About
                </Link>
              </li>
              <li>
              <Link to="/blog/" activeStyle={{ color: "aqua" }} activeClassName={headerStyles.activeMenuItem}>
                  Blog
                </Link>
              </li>
              <li>
              <Link to="/contact/" activeStyle={{ color: "aqua" }} activeClassName={headerStyles.activeMenuItem}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )
}

export default Header