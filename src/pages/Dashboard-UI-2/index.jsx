import React from "react";
import "./Dashboard-UI-2.scss";
import Table from "../../components/Table/index";
import Header from "../../components/Header/index";
import Navigation from "../../components/Navigation/index";

const heading = [
    {
        "head": "Deparment/Role Name",
        "include": true,
        "hidden": false,
    },
    {
        "head": "Access Level",
        "include": true,
        "hidden": false,
    },
    {
        "head": "Summary",
        "include": true,
        "hidden": false,
    },
    {
        "head": "Last Updated",
        "include": true,
        "hidden": false,
    },
    {
        "head": "head",
        "include": true,
        "hidden": true,
    }
];

const ManagementData = [
  {
    role: "Budget",
    access: "access",
    members: 10,
    isMembers: false,
    isToggle: true,
    updated: "1 min ago",
    isCirle: false,
    summary: ['view', 'edit', 'create', 'delete'],
    expandable: true,
  },
  {
    role: "Binding",
    access: "restricted",
    members: 6,
    isMembers: false,
    isCirle: false,
    isToggle: true,
    summary: [ 'edit' ],
    updated: "1 min ago",
    expandable: true,
  },
  {
    role: "vendor portal",
    access: "noaccess", 
    members: 5,
    updated: "1 min ago",
    isMembers: false,
    isCirle: false,
    isToggle: true,
    summary: [],
    expandable: true,
  },
  {
    role: "Organization profile",
    access: "access",
    members: 1,
    updated: "1 min ago",
    isMembers: false,
    isCirle: false,
    isToggle: true,
    summary: [ 'create', 'delete'],
    expandable: true,
  },
  {
    role: "Permissin and access control",
    access: "restricted",
    members: 8,
    updated: "1 min ago",
    isMembers: false,
    isCirle: false,
    isToggle: true,
    summary: ['view', 'edit'],
    expandable: true,
  },
];

const Dashboard_UI_2 = () => {
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
                <Table className="container-table" data={ManagementData} heading={heading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_UI_2;
