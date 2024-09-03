import { Container } from "@/components/Container";
import { sriracha, titillium_web } from "@/app/ui/fonts";

const nextEvent = {
  speaker: {
    name: "Jorge Pacora",
    position: "Hacker por curiosidad",
    photoUrl:
      "https://scontent.ftcq1-1.fna.fbcdn.net/v/t1.6435-9/96144700_10219806945138773_4619976976050946048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHaKODEWf9DNkfJAys8KE68SFr7DFLuiDdIWvsMUu6INyRiL9FXgVUUnAZew9A78ycU8-DF8Ll36zS2Rg7qttBx&_nc_ohc=RgG-amx_VYMQ7kNvgEDv594&_nc_ht=scontent.ftcq1-1.fna&oh=00_AYBcuV4x7ECxFCkorBFIrAcJEGz_xlaa41tJe9Pa9j3OqQ&oe=66FEF175",
  },
  title: "Cómo comenzar en hacking?",
  date: "15 de Agosto",
  hour: "17:00 (GMT -5)",
  type: "Codenity Meetup",
  liveStreaming: {
    url: "https://www.youtube.com/@codenity9515",
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
              <img
                src={nextEvent.speaker.photoUrl}
                alt="Meetup Event"
                className="w-full h-80 object-cover rounded mb-4"
              />
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
    /** 
    <section className="relative z-0 mt-0 pt-20 bg-hero-image bg-cover bg-no-repeat bg-center min-h-[700px] md:min-h-[900px] backdrop-blur-none">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/75 to-blue-500/75 to-transparent bg-opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-2"></div>
      <div className=" flex justify-between">
        <Container>
          <div className="flex">
            <div className="w-full md:w-5/10">
              <div className="text-center">
                <h2
                  className={` ${titillium_web.className} mt-4 text-4xl md:text-5xl font-semibold text-white`}
                >
                  <span className="text-yellow-300 italic">
                    <code>&lt;Codenity&gt;</code>
                  </span>
                  un lienzo infinito para la{" "}
                  <span className="italic hover:text-yellow-300">
                    innovación
                  </span>
                </h2>
                <p
                  className={` ${sriracha.className} text-white italic md:text-2xl mb-10 mt-2`}
                >
                  Crea, colabora, transforma 
                </p>
                <div>
                  <a className="bg-[#002347] text-white px-10 py-3 rounded uppercase text-xs font-bold">
                    Aprende más
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-5/10 flex justify-center items-center">
              <div className="bg-[#001528] shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              
                <h3 className="text-xl text-gray-100 font-bold mb-4">Siguiente evento</h3>

                <img
                  src={nextEvent.speaker.photoUrl}
                  alt="Foto del speaker"
                  className="w-24 h-24 rounded-full mb-4"
                />
                
                <p className="font-bold text-yellow-200 mb-2">
                  {nextEvent.speaker.name}
                </p>

                <p className="text-gray-100 mb-4">
                  {nextEvent.speaker.position}
                </p>
                
                <div className="border-2 border-dashed border-yellow-400 rounded-full px-4 py-2 mb-4">
                  <p className="text-yellow-300">
                    {nextEvent.type}
                  </p>
                </div>

                <p className="text-gray-100 mb-4 font-bold">
                  {nextEvent.title}
                </p>

                <div className="bg-yellow-400 rounded-xl px-4 py-2 mb-4">
                  <p className="text-blue-950 mb-2 font-bold">
                    {nextEvent.date} - {nextEvent.hour}
                  </p>
                </div>

                <a
                  href={nextEvent.liveStreaming.url}
                  target="_blank"
                  className="bg-red-500 text-white px-4 py-2 rounded block"
                >
                  Ver en {nextEvent.liveStreaming.platform}
                </a>
              </div>
            </div>

          </div>
        </Container>
      </div>

      
    </section>
    */
  );
};
