import React from "react"
import './Navigation.scss'

const Navigation = () => {
    return(
        <div className="body-navigation">
        <div className="body-navigation-element">
          <div className="body-navigation-element-sub">
            <img src="asset/svg/projects.svg" alt="logo" />
            <div className="body-navigation-element-sub-text">projects</div>
          </div>
        </div>
        <div className="body-navigation-element">
          <div className="body-navigation-element-sub">
            <img src="asset/svg/org-profile.svg" alt="logo" />
            <div className="body-navigation-element-sub-text">
              Organisation Profile
            </div>
          </div>
        </div>
        <div className="body-navigation-element">
          <div className="body-navigation-element-sub">
            <img src="asset/svg/control.svg" alt="logo" />
            <div className="body-navigation-element-sub-text">
              Access Control
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navigation;