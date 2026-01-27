
import FeatureSection from "./FeatureSection";
import Gallery from "./Gallery";
import SectionServices from "./SectionServices";

export function LandingPage() {
  return (
    <>
      <div className="bg-radial from-[#161200bd] from-1% to-[#07060033] opacity-100 ">
        {/* Galery Section */}
        <section className=" container mx-auto px-4 my-10 md:max-w-5/5 md:px-10">
          <Gallery />
        </section>

        {/* Línea de división */}
        <div
          className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent  border-none"
          id="servicios"
        />

        {/* Sectión Services */}
        <section className="container mx-auto px-6 my-10 md:max-w-4/5">
          <SectionServices />
        </section>

        {/* Línea de división */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent  border-none" />

        {/* Features Section */}
        <section className="container mx-auto px-4 my-10 md:max-w-5/5 md:px-10"
          id="contacto"
        > 
          <FeatureSection />
        </section>

      </div>
    </>
  );
}
