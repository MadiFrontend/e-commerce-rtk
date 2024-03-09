import Cards from "../components/card/Cards";
import HeroSection from "../components/heroSection/Hero-Section";
function Page() {
  return (
    <>
      <HeroSection />
      <div className="mt-16">
        <Cards />
      </div>
    </>
  );
}

export default Page;
