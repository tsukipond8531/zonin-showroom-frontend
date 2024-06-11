import { AboutPreview } from "../components/about-preview/AboutPreview";
import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { Team } from "../components/team/Team";
import { Testimonials } from "../components/testimonials/Testimonials";
import { FAQ } from "../components/faq/FAQ";
import { Subscribe } from "../components/subscribe/Subscribe";

export const About = () => {
  return (
    <>
      <GenericHero header="About Us" title="Our History" />
      <AboutPreview />
      <WhyChooseUs />
      <Services />
      <Stats />
      <ExplorePremiumBrands type="generic" />
      <Team />
      <Testimonials />
      <FAQ />
      <Subscribe />
    </>
  );
};
