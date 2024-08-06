import { Container } from "../Container";
import { SocialMediaIcon } from "../SocialMediaIcon";
export const Footer = () => {
  return (
    <footer
      className="relative
    bg-slate-950
      w-full flex flex-col place-items-center pb-20 pt-14 px-8 
      md:flex-row md:justify-between md:pt-16"
    >
      <Container>
        <div
          className="flex flex-col items-center gap-4 text-center
      md:flex-row md:justify-between md:items-center 
      w-full lg:gap-6"
        >
          <span tabIndex="0" className="text-xl text-neutral-300 text-center">
            © Codenity v2.0 <p className="hidden lg:inline">|</p>
            <br className="inline lg:hidden" />
            <span> Comunidad de desarrollo.</span>
          </span>
          <SocialMediaIcon
            FB="true"
            IG="true"
            LI="true"
            GH="true"
            YT="true"
            X="true"
          />
        </div>
      </Container>
    </footer>
  );
};
