import { About } from "./About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Mission } from "./Mission";
import { Values } from "./Values";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Mission />
      <Values />
      <Footer />
    </div>
  );
};
