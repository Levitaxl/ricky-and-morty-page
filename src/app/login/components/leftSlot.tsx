'use client';

import '../styles/LeftSlotStyle.css'

export const LeftSlot = () => {

  return (
    <div className="left-slot">
        <div className="admin-identy-holder">
            <div className="admin-icon"><img src="./admin.svg"/></div>
            <h1>Welcome to Panel</h1>
            <strong>Monitor your server usage &amp; services as well as manage applications &amp; front website.</strong>
        </div>
        <div className="admin-main-image">
            <img src="./dashboard.png"/>
        </div>
    </div>);
};