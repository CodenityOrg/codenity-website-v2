import { Header } from "@/components/Header";
import { HomeBanner } from "@/components/sections/HomeBanner";
import { Features } from "@/components/sections/Features";
import { Discord } from "@/components/sections/Discord";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Features />
      <Discord />
      <Projects />
      <Footer />
    </>
  );
}
