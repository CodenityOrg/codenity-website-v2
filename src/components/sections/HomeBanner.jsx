import { Container } from "@/components/Container";
import { sriracha, titillium_web } from "@/app/ui/fonts";

const nextEvent = {
  speaker: {
    name: "Lisbeths Desingrid Calderon Garrido",
    position: "Senior Digital Risk Consultant",
    photoUrl:
      "https://ciistacna.com/speakers/f287f87f-55c0-4b11-98ca-8241a0957d46.jpg",
  },
  title: "Auditoría de seguridad de accesos",
  date: "03 de Octubre",
  hour: "17:00 (GMT -5)",
  type: "Codenity Meetup",
  liveStreaming: {
    url: "https://www.youtube.com/live/OCwq2b81TLg",
    platform: "YouTube",
  },
};

export const HomeBanner = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-8 md:px-16">
      <Container>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-x-8">
          <div className="md:w-1/2 ">
            <h2
              className={` ${titillium_web.className} mt-4 text-4xl md:text-5xl font-semibold text-white`}
            >
              <span className="text-yellow-400 italic">
                <code>&lt;Codenity&gt;</code>
              </span>
              un lienzo infinito para la{" "}
              <span className="italic hover:text-yellow-400">innovación</span>
            </h2>
            <p className="mb-6 text-white">
              Aprende creando tecnología para resolver problemas sociales
            </p>
            <button className="bg-transparent border  border-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
              UNIRME A DISCORD
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
         
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-center text-sm font-bold text-gray-300 mb-2">
                PRÓXIMO EVENTO
              </h3>
              <div className="mb-4">
                <img
                  src={nextEvent.speaker.photoUrl}
                  alt="Meetup Event"
                  className="w-[280px] h-[360px] overflow-hidden block mx-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2"> 
                  <div className="px-2">
                    <h4 className="text-[14px] uppercase text-white font-bold mb-2">{nextEvent.title}</h4>
                    <p className="text-sm text-gray-300">
                      {nextEvent.speaker.name}
                    </p>
                    <p className="text-[14px] uppercase text-yellow-500 font-bold mb-2">
                      {nextEvent.speaker.position}
                    </p>
                    <p className="text-[13px] text-white">
                      {nextEvent.date} - {nextEvent.hour}
                    </p>
                  </div>

                </div>
                <div className="w-full md:w-1/3">
                  <div className="mt-4 flex justify-items-end">
                  <a
                    href={nextEvent.liveStreaming.url}
                    target="_blank"
                    className="bg-transparent border  border-white text-white px-4 py-2 rounded-full block text-[14px] font-bold hover:bg-yellow-600 transition duration-300"
                  >
                    Ver en {nextEvent.liveStreaming.platform}
                  </a>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
