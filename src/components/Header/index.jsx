import React from "react"
import './Header.scss'

const Header = () => {
    return(
        <div className="header">
        <img className="header-logo" src="asset/svg/logo.svg" alt="logo" />
        <div className="header-content">
          <div className="header-content-profile">
            <img src="asset/svg/profile.svg" alt="logo" />
            Kishore
          </div>
          <div className="header-action">
            <img src="asset/svg/bell.svg" alt="logo" />
            <img src="asset/svg/info.svg" alt="logo" />
          </div>
        </div>
      </div>
    );
}

export default Header;