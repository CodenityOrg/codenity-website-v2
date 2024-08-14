import { ContadorRegresivo } from "./ContadorRegresivo";
import { SocialMediaIcon } from "./SocialMediaIcon";

export function PreHome({ fecha, dataFrase }) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fondo desenfocado */}
      <div
        className="absolute inset-0 
        bg-[url('/images/background.jpg')]
        blur-sm
        scale-[1.1] transform
        "
      ></div>
      {/* Capa de filtro oscuro */}
      <div
        className=" absolute inset-10 
        bg-slate-950
        scale-[1.1] transform
        opacity-50
        "
      ></div>

      {/* Contenido no desenfocado */}
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <img
          src="./images/codenity-logo-text.png"
          alt="Logo codenity text"
          className="w-4/5 h-auto sm:w-2/4 lg:w-2/6 "
        />
        <h2 className="text-4xl mb-3 mt-9 text-cyan-300	">REGRESAMOS EN</h2>
        <ContadorRegresivo fecha={fecha} />
        <SocialMediaIcon
          FB="true"
          IG="true"
          LI="false"
          GH="true"
          YT="true"
          X="true"
        />
        <div className="w-4/5 mt-8 flex flex-col items-center gap-4 justify-center md:w-3/5">
          {/* <p className="text-2xl text-white text-center">{dataFrase.quote}</p> */}
          {/* <p className="text-2xl text-white">- {dataFrase.author}</p> */}

          {dataFrase ? (
            <div className="w-4/5 mt-8 flex flex-col items-center gap-4 justify-center md:w-3/5">
              <p className="text-2xl text-white text-center">
                {dataFrase.quote}
              </p>
              <p className="text-2xl text-white">- {dataFrase.author}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
}
