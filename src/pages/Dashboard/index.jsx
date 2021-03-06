import React from "react";
import "./Dashboard.scss";
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
      "head": "No of Members",
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
    role: "Management Team",
    access: "access",
    members: 10,
    isMembers: true,
    isToggle: false,
    updated: "1 min ago",
    isCircle: true,
    summary: ['view', 'edit', 'create', 'delete'],
    expandable: false,
  },
  {
    role: "Procurement Team",
    access: "restricted",
    members: 6,
    isMembers: true,
    isCircle: true,
    isToggle: false,
    summary: [ 'edit' ],
    updated: "1 min ago",
    expandable: false,
  },
  {
    role: "IT Team",
    access: "access", 
    members: 5,
    updated: "1 min ago",
    isMembers: true,
    isCircle: true,
    isToggle: false,
    summary: [],
    expandable: false,
  },
  {
    role: "Super Admin",
    access: "access",
    members: 1,
    updated: "1 min ago",
    isMembers: true,
    isCircle: true,
    isToggle: false,
    summary: [ 'create', 'delete'],
    expandable: false,
  },
  {
    role: "Project Team",
    access: "restricted",
    members: 8,
    updated: "1 min ago",
    isMembers: true,
    isCircle: true,
    isToggle: false,
    summary: ['view', 'edit'],
    expandable: false,
  },
];

const Dashboard = () => {
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
              <div className="container">
                <div className="action">
                  <button className="action-button"> + Add Role </button>
                  <img src="asset/svg/edit.svg" alt="line" />
                  <img src="asset/svg/bin.svg" alt="line" />
                </div>
                <Table data={ManagementData} heading={heading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
