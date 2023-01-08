import React from "react";
import Project from "../project/project.component";
import "./project-list.styles.css";

const ProjectList = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <Project key={menuItem.id} menuItem={menuItem} />;
      })}
    </div>
  );
};

export default ProjectList;
