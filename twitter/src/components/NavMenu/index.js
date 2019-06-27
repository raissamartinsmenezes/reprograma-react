import React, { Component } from "react";
import navMenuStyles from "./navMenu.module.css";
import { Link } from 'react-router-dom'
// para links externo que serão redirecionados para páginas fora do seu sistema 

export default class NavMenu extends Component {
  render() {
    return (
      <nav className={navMenuStyles.navMenu}>
        <ul className={navMenuStyles.navMenu__lista}>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/">
              Bem vindo(a): <br />
              <strong>@{this.props.usuario}</strong>
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/">
              Página Inicial
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/hashtags">
              Hashtags
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <Link className={navMenuStyles.navMenu__link} to="/" onClick={() => localStorage.clear()}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
