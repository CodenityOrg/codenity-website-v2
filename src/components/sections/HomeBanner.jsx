import { Container } from "@/components/Container";
import { sriracha, titillium_web } from "@/app/ui/fonts";

const nextEvent = {
  speaker: {
    name: 'Jorge Pacora',
    position: 'Hacker por curiosidad',
    photoUrl: 'https://scontent.ftcq1-1.fna.fbcdn.net/v/t1.6435-9/96144700_10219806945138773_4619976976050946048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHaKODEWf9DNkfJAys8KE68SFr7DFLuiDdIWvsMUu6INyRiL9FXgVUUnAZew9A78ycU8-DF8Ll36zS2Rg7qttBx&_nc_ohc=RgG-amx_VYMQ7kNvgEDv594&_nc_ht=scontent.ftcq1-1.fna&oh=00_AYBcuV4x7ECxFCkorBFIrAcJEGz_xlaa41tJe9Pa9j3OqQ&oe=66FEF175',
  },
  title: 'Cómo comenzar en hacking?',
  date: '15 de Agosto',
  hour: '17:00 (GMT -5)',
  type: 'Codenity Meetup',
  liveStreaming: {
    url: 'https://www.youtube.com/@codenity9515',
    platform: 'YouTube',
    logo: 'asdads'
  }
};

export const HomeBanner = () => {
  return (
    <section className="relative z-0 mt-0 pt-20 bg-hero-image bg-cover bg-no-repeat bg-center min-h-[700px] md:min-h-[900px] backdrop-blur-none">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/75 to-blue-500/75 to-transparent bg-opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-2"></div>
      <div className="relative z-1 p-10 md:pt-40 md:pl-40 md:pr-40 flex justify-between">
        <Container>
          <div className="flex">
            {/* Contenido existente - 70% de ancho */}
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

            {/* Card - 30% de ancho */}
            <div className="w-full md:w-5/10 flex justify-center items-center">
              <div className="bg-[#001528] shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                {/* Imagen circular */}
                <img
                  src={nextEvent.speaker.photoUrl}
                  alt="Foto del speaker"
                  className="w-24 h-24 rounded-full mb-4"
                />
                
                {/* Título del card */}
                <h3 className="text-xl text-gray-100 font-bold mb-4">Siguiente evento</h3>
                
                {/* Nombre del speaker */}
                <p className="font-bold text-yellow-200 mb-2">
                  {nextEvent.speaker.name}
                </p>
                
                {/* Posición del speaker */}
                <p className="text-gray-100 mb-4">
                  {nextEvent.speaker.position}
                </p>
                
                {/* Tipo de evento */}
                <div className="border-2 border-dashed border-yellow-400 rounded-full px-4 py-2 mb-4">
                  <p className="text-yellow-300">
                    {nextEvent.type}
                  </p>
                </div>
                
                {/* Título del evento */}
                <p className="text-gray-100 mb-4 font-bold">
                  {nextEvent.title}
                </p>
                
                {/* Fecha y hora del evento */}
                <div className="bg-yellow-400 rounded-xl px-4 py-2 mb-4">
                  <p className="text-blue-950 mb-2 font-bold">
                    {nextEvent.date} - {nextEvent.hour}
                  </p>
                </div>
                
                {/* Botón para ver en la plataforma */}
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
  );
};
