import { Container } from "@/components/Container";
import { sriracha, titillium_web } from "@/app/ui/fonts";

export const HomeBanner = () => {
  return (
    <section className="relative z-0 mt-0 pt-20 bg-hero-image bg-cover bg-no-repeat bg-center min-h-[700px] md:min-h-[900px] backdrop-blur-none ">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/75 to-blue-500/75 to-transparent bg-opacity-50"></div>
      <div class="absolute inset-0 backdrop-blur-2"></div>
      <div className="relative z-1 p-10 md:pt-40 md:pl-40 md:pr-40 flex justify-center">
        <Container>
          <div className="row">
            <div className="col-lg-12">
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
                  className={` ${sriracha.className}  text-white italic md:text-2xl mb-10 mt-2 `}
                >
                  Crea, colabora, transforma
                </p>
                <div>
                  <a className="bg-[#002347] text-white px-10 py-3 rounded uppercase text-xs font-bold">
                    Aprende mas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
