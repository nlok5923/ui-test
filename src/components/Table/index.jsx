import React from "react";
import "./Table.scss";
import helper from "../../Utils/helper";

const Table = ({ data, heading }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr className="heading">
            {heading.map((element, index) => {
              return element.include ? (
                <th>
                  {" "}
                  {element.hidden ? (
                    <p hidden> {element.head}</p>
                  ) : (
                    element.head
                  )}{" "}
                </th>
              ) : null;
            })}
          </tr>
          {data.map((element, index) => {
            return (
              <tr>
                <td>
                  <div className="role">
                    {element.isCircle ? (
                      <img src="asset/svg/circle.svg" alt="see" />
                    ) : (
                      <img src="asset/svg/add.svg" alt="see" />
                    )}
                    {element.role}
                  </div>
                </td>
                <td>{helper.chooseAccessButtons(element)}</td>
                <td>
                  {element.isMembers
                    ? element.members
                    : helper.formatSummary(element.summary)}
                </td>
                <td>{element.updated}</td>
                <td>
                  {element.isToggle ? (
                    <label class="switch">
                      {" "}
                      <input type="checkbox" checked />{" "}
                      <span className="slider round"></span>{" "}
                    </label>
                  ) : (
                    <img src="asset/svg/eye.svg" alt="see" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
