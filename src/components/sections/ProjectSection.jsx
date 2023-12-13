import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectSection,
  Tags,
} from "../styles/sections/ProjectSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { Projects } from "../../data/Projects";

const ProjectSection = () => {
  return (
    <>
      <StyledProjectSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
          <p>These are some of my projects</p>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => {
              return (
                <SingleProject key={index}>
                  <ProjectImageContainer
                    href={project.projectLink}
                    target="_blank"
                  >
                    <img src={project.thumbnail} alt={project.title} />
                    <SlantedCard />
                  </ProjectImageContainer>
                  <ProjectDescription>
                    <h1>{project.title}</h1>
                    <Tags>
                      {project.tags &&
                        project.tags.map((tag, tagIndex) => {
                          return <span key={tagIndex}>{tag}</span>;
                        })}
                    </Tags>
                    <p>{project.paragraph}</p>
                    <div>
                      <a href={project.codelink} target="_blank">
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                      <a href={project.projectLink} target="_blank">
                        <FaLink />
                        <span>View Project</span>
                      </a>
                    </div>
                  </ProjectDescription>
                </SingleProject>
              );
            })}
        </div>
      </StyledProjectSection>
      <hr />
    </>
  );
};

export default ProjectSection;
