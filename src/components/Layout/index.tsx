import * as React from 'react';
import './index.scss';

interface IProps {
  children: any;
}
const LOGO_PATH = 'src/assets/logo.png';
export const LayoutComponent = ({ children }: IProps) => {
  return (
    <div className="header_container">
      <div className="header_inner">
        <img src={LOGO_PATH} alt="" />
        <h2>Mockup Maker</h2>
      </div>
      {children}
    </div>
  );
};
