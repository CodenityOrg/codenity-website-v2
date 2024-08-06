"use client";
import React, { useState } from "react";
import { Section } from "@/components/Section";
import { ProjectItem } from "@/components/ProjectItem";
import { Container } from "@/components/Container";
import { ProjectModal } from "../ProjectModal";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState();
  const [openModal, setOpenModal] = useState(false);
  const projects = [
    {
      name: "Helpet",
      description:
        "Ayuda a encontrar mascotas perdidas alrededor de tu ciudad! :)",
      imgUrl: "images/helpet-screen.jpg",
      link: "https://helpet.codenity.org",
      collaborators: [
        {
          fullName: "Angel Rodriguez Romero",
          role: "Fullstack developer",
          avatar: "https://avatars0.githubusercontent.com/u/8053607?v=4",
          link: "https://github.com/AngelRodRo",
        },
        {
          fullName: "Angel Rodriguez Romero",
          role: "Fullstack developer",
          avatar: "https://avatars0.githubusercontent.com/u/8053607?v=4",
          link: "https://github.com/AngelRodRo",
        },
        {
          fullName: "Angel Rodriguez Romero",
          role: "Fullstack developer",
          avatar: "https://avatars0.githubusercontent.com/u/8053607?v=4",
          link: "https://github.com/AngelRodRo",
        },
      ],
      github: "",
    },
  ];

  const handleOpenProject = (project) => {
    setOpenModal(true);
    setCurrentProject(project);
  };

  console.log(openModal);

  return (
    <Section
      title="Nuestros proyectos"
      description="Cada proyecto tiene un fin social sin fines de lucro"
    >
      {currentProject && (
        <ProjectModal
          project={currentProject}
          openModal={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}

      <Container>
        <div className="flex">
          {projects.map((project, idx) => (
            <ProjectItem
              key={idx}
              {...project}
              onClick={() => handleOpenProject(project)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
