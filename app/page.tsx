import Faq from "./faq";
import Feat from "./feat";
import { Hero } from "./hero";
import Pricing from "./pricing";
import { Testim } from "./testim";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feat />
      <Pricing />
      <Testim />
      <Faq />
    </div>
  );
}
