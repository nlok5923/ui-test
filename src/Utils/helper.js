import React from "react";
import AccessButton from "../components/AccessButtons/Access/index";
import RestrictedButton from "../components/AccessButtons/Restricted/index";
import NoAccessButton from "../components/AccessButtons/NoAccess/index";

const formatSummary = (summary) => {

   let i = 0;
  return summary.length !== 0 ? (
    <div className="summmary">
      {summary.map((element, index) => {
          i++;
        return (
          <div className="summary-element">
            <p className="summary-element-text"> {element} {(i < summary.length) ? "|" : null } </p>
          </div>
        );
      })}
    </div>
  ) : (
    "-"
  );
};

const chooseAccessButtons = (element) => {
  switch (element.access) {
    case "access":
      return <AccessButton />;

    case "restricted":
      return <RestrictedButton />;

    case "noaccess":
      return <NoAccessButton />;

    default:
      return null;
  }
};

const helper = {
    chooseAccessButtons: chooseAccessButtons,
    formatSummary: formatSummary
}

export default helper;