import './App.css';
import React, {useState} from "react";
import Overview from "./Components/Overview/Overview";
import styled from "styled-components";
import ProjectCard from "./Components/Projects/ProjectCard";
import {Projects} from "./Components/Common/ProjectList"

function App() {

    const ProjectsWrapper = styled.div`
      max-width: 2000px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      
    `

    return (
        <div className="App">
            <Overview/>
            <ProjectsWrapper>
                {
                    Projects.map(project =>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            banner={project.banner}
                            repoURL={project.repoURL}
                            siteURL={project.siteURL}
                            universityRepo={project.universityRepo}
                            frontendRepo={project.frontendRepo}
                        />
                    )
                }
            </ProjectsWrapper>
        </div>
    );
}


export default App;
