import { Section } from "@/components/Section";
import React from "react";
import { StepItem } from "@/components/StepItem";
import { Container } from "@/components/Container";

export const Discord = () => {
  const steps = [
    {
      text: "Instala Discord en tu ordenador desde aqui",
      imgUrl: "images/discord-section/step-1.png",
    },
    {
      text: "Unete a nuestro grupo de Discord desde aqui",
      imgUrl: "images/discord-section/step-2.png",
    },
    {
      text: "Mantente activo en nuestros canales como #nodejs, #javascript u otros de tu preferencia",
      imgUrl: "images/discord-section/step-3.png",
    },
    {
      text: "A mayor actividad podrás participar en nuestros brainstorming de proyectos",
      imgUrl: "images/discord-section/step-4.png",
    },
    {
      text: "Participa en nuestros proyectos y crea un portafolio para que las empresas vean tu trabajo!",
      imgUrl: "images/discord-section/step-5.png",
    },
  ];
  return (
    <Section
      title={
        <span>
          Como comenzar en <br /> Discord?
        </span>
      }
      description="Aprende cómo ser activo en nuestra comunidad"
    >
      <div className="bg-[#20a5eb] px-10 py-8">
        <Container>
          <div className="flex flex-col md:flex-row max-w-[390px] md:max-w-full md:gap-4 md:flex-wrap items-center pt-14 pb-10">
            {steps.map((step, idx) => (
              <StepItem
                key={idx}
                text={step.text}
                index={idx + 1}
                imgUrl={step.imgUrl}
              />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
};
