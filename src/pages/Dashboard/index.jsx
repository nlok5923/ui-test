import React from "react";
import "./Dashboard.scss";
import Table from '../../components/Table/index'

const Dashboard = () => {
  return (
    <div>
      <div className="page">
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
        <div className="body">
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
          <div className="body-content">
            <div className="body-content-box">
              <div className="status">
                <div className="status-actions">
                  <div className="status-actions-element">
                    <img src="asset/svg/feed.svg" alt="strip" />
                    <h1 className="colored"> Permissions</h1>
                  </div>
                  <img src="asset/svg/strip.svg" alt="strip" />
                  <div className="status-actions-element">
                    <img src="asset/svg/matrix.svg" alt="strip" />
                    <h1>Approval Matrix</h1>
                  </div>
                </div>
                <div className="status-state">
                  <img
                    className="status-state-img"
                    src="asset/svg/sync.svg"
                    alt="sync"
                  />
                  last sync 15 min ago
                </div>
              </div>

              <div className="container">
                  <div className="action">
                      <button className="action-button"> + Add Role </button>
                  <img src="asset/svg/edit.svg" alt="strip" />

                  <img src="asset/svg/bin.svg" alt="strip" />
                  </div>

                  <Table />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
