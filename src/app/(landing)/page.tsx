import { Hero } from "./_components/hero";
import { StoreCTA } from "./_components/cta/store-cta";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <div className="main-bg bg-cover bg-no-repeat">
        <StoreCTA />
      </div>
    </main>
  );
};

export default LandingPage;
