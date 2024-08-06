import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export const Features = () => {
  const features = [
    {
      title: "Aprende ayudando",
      icon: "flaticon-student",
      description: `
          Aprende o practica una tecnologia aplicandola a proyectos con
          fines sociales trabajando con personas de tu mismo nivel o
          superior.
      `,
    },
    {
      title: "Soluciona problemas reales",
      icon: "flaticon-earth",
      description: `
        Propone un problema y busquemos una solucion tecnologica! Juntos desarollaremos un proyecto que supla esas necesidades.
      `,
    },
    {
      title: "Portafolio validable",
      icon: "flaticon-book",
      description: `
        Genera un portafolio validable para empresas, y que aporten un valor mas grande para nuestra sociedad.
      `,
    },
  ];

  return (
    <Section title="Que te ofrecemos?">
      <Container>
        <div className="flex flex-col md:flex-row gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="mx-3">
              <div className="px-5 py-10 bg-[#f9f9ff]">
                <div className="icon">
                  <span className={feature.icon}></span>
                </div>
                <div className="desc">
                  <h4 className="text-xl md:text-2xl font-bold mt-3 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[#7b838a]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
