import React from "react";
import logo from '../../images/logo_blue.png';
import './styles.css'

export default function Header() {
    return (
        <div className='header-container'>
          <img
            src={logo}
            alt='logo'
          />

          <article>
            <h1 className='company-name'>TECH <strong>LEGION</strong></h1>
            <p>UMA LEGIÃO AO SEU LADO</p>
          </article>
          
          </div>
    )
}