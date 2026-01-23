import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import { LandingPage } from "../components/sections/LandingPage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <Hero />
      </div>

      <LandingPage />

      <Footer />
    </>
  );
}
