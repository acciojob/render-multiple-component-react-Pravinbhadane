import React, {Component, useState} from "react";
import '../styles/App.css';
import Project from "./Project";
import ProjectDisc from "./ProjectDisc";
const App = () => {
  return (
    <div id="main">
      <Project/>
      <ProjectDisc/>
      
    </div>
  )
}


export default App;
