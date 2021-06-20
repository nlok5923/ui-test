import React from "react";
import "./Table.scss";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <tr className="heading">
          <th>Deparment/Role Name</th>
          <th>Access Level</th>
          <th>No of Members</th>
          <th>Last updated</th>
          <th> to see </th>
        </tr>
        <tr>
          <td>
            <div className="role">
              <img src="asset/svg/circle.svg" alt="see" />
              Management Team
            </div>
          </td>
          <td>
            <button className="access"> All access</button>
          </td>
          <td>4</td>
          <td>1 min ago</td>
          <td>
            <img src="asset/svg/eye.svg" alt="see" />
          </td>
        </tr>
        <tr>
          <td>
            <div className="role">
              <img src="asset/svg/circle.svg" alt="see" />
              Management Team
            </div>
          </td>
          <td>
            <button className="restricted"> Restricted</button>
          </td>
          <td>4</td>
          <td>1 min ago</td>
          <td>
            <img src="asset/svg/eye.svg" alt="see" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
