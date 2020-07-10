import * as React from 'react';
import logo from '../../assets/logo.png';
import './header.scss';
export const HeaderComponent = () => (
  <div className="header_container">
    <div className="header_inner">
      <img src={logo} alt="" />
      <h2>Mockup Maker</h2>
    </div>
  </div>
);
