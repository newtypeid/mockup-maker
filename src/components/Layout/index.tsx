import * as React from 'react';
import logo from '../../assets/logo.png';
import './index.scss';

interface IProps {
  children: any;
}

export const LayoutComponent = ({ children }: IProps) => (
  <div className="header_container">
    <div className="header_inner">
      <img src={logo} alt="" />
      <h2>Mockup Maker</h2>
    </div>
    {children}
  </div>
);
