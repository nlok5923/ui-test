import React from "react";
import "./Dashboard-UI-3.scss";
import Header from "../../components/Header/index";
import Navigation from "../../components/Navigation/index";

const Dashboard_UI_3 = () => {
  return (
    <div>
      <div className="page">
        <Header />
        <div className="body">
          <Navigation />
          <div className="body-content">
            <div className="body-content-box">
              <div className="status">
                <div className="status-actions">
                  <div className="status-actions-element">
                    <img src="asset/svg/feed.svg" alt="line" />
                    <h1 className="colored"> Permissions</h1>
                  </div>
                  <img src="asset/svg/line.svg" alt="line" />
                  <div className="status-actions-element">
                    <img src="asset/svg/matrix.svg" alt="line" />
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
              <div className="selection">
                <img src="asset/svg/arrow.svg" alt="arrow" />
                <p> Management Team </p>
                <img src="asset/svg/edit.svg" alt="line" />
              </div>

              <div className="container">
                <div className="status">
                  <div className="status-actions">
                    <div className="status-actions-element">
                      <h1 className="colored"> Access Control </h1>
                    </div>
                    <img src="asset/svg/line.svg" alt="line" />
                    <div className="status-actions-element">
                      <h1>Assigned Members</h1>
                    </div>
                  </div>
                </div>
                <div className="expandable">
                  <div className="expandable-container">
                    <div className="expand-content">
                      <img src="asset/svg/collapse.svg" alt="collapse" />
                      <div className="expand-content-text">
                        <p>
                          {" "}
                          Bindings <br />
                          All aspects of binding in module{" "}
                        </p>
                      </div>
                    </div>
                    <div className="extras">
                      <div className="update">
                        <p> 1 min ago </p>
                      </div>
                      <div className="toggle">
                        <label class="switch">
                          {" "}
                          <input type="checkbox" checked />{" "}
                          <span className="slider round"></span>{" "}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="options">
                    <div className="access-controls">
                      <h1> Access Controls </h1>
                      <div className="access-controls-element">
                        <label className="radio-container">
                          <input type="radio" />
                          <span className="radio-checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> All access </h1>
                          <p>can access all items </p>
                        </div>
                      </div>

                      <div className="access-controls-element">
                        <label className="radio-container">
                          <input type="radio" />
                          <span className="radio-checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> Restricted Access </h1>
                          <p>Can access only assigned and created items</p>
                        </div>
                      </div>
                    </div>
                    <img src="asset/svg/divider.svg" alt="divider" />
                    <div className="permissions-controls">
                      <h1> Permissions </h1>
                      <div className="permission-controls-element">
                        <label className="checkbox-container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> View items in access </h1>
                        </div>
                      </div>

                      <div className="permission-controls-element">
                        <label className="checkbox-container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> Edit items in access </h1>
                        </div>
                      </div>

                      <div className="permission-controls-element">
                        <label className="checkbox-container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> Create items in access </h1>
                        </div>
                      </div>

                      <div className="permission-controls-element">
                        <label className="checkbox-container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="text">
                          <h1> Delete items in access </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_UI_3;
