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
    <Section title="¿Que te ofrecemos?" backgroundColor="#002333">
      <Container>
      <div className="flex flex-col md:flex-row gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="mx-3 flex-grow ">
            <div className="px-5 pb-2 bg-[#002333] border-4 border-[#20a5eb] rounded-lg min-h-[300px] min-w-[350px]">
              <div className="icon absolute -mt-10 py-2 px-5 bg-[#002333]">
                <span className={`${feature.icon}`}></span>
              </div>
              <div className="desc mt-10">
                <h5 className="text-md md:text-2xl font-bold mt-3 mb-2 text-center">
                  {feature.title}
                  
                </h5>
                <p className="text-[#7b838a] text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      </Container>
    </Section>
  );
};
