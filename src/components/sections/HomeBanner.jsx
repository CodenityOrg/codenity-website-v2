import { Container } from "@/components/Container";

export const HomeBanner = () => {
  return (
    <section className="mt-0 pt-20 bg-hero-image bg-cover bg-no-repeat bg-center min-h-[700px] md:min-h-[900px]">
      <div className="p-10 md:pt-40 flex justify-center">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="uppercase text-white font-bold md:text-2xl">
                  Aprende a crear tecnologia con valor para la sociedad
                </p>
                <h2 className="uppercase mt-4 mb-10 text-4xl md:text-5xl font-bold text-white">
                  Aprende creando tecnologia para resolver problemas sociales
                </h2>
                <div>
                  <a
                    href="#slack"
                    className="bg-[#002347] text-white px-10 py-3 rounded uppercase text-xs font-bold"
                  >
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
