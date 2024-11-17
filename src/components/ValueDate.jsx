import discovery from "../assets/dicvovery.png";
import transparency from "../assets/transparency.png";
import empowerment from "../assets/empowerment.png";
import { ValuesCard } from "./ValuesCard";

export const ValueDate = () => {
  const ValueData = [
    {
      image: `${discovery}`,
      title: "discovery",
      description:
        "Scout is driven by the commitment to discovering and showcasing hidden talents, creating opportunities for individuals to shine on a broader stage. ",
    },
    {
      image: `${transparency}`,
      title: "transparency",
      description:
        "Build trust by being open about the platform's operations, policies, and the value it brings to both talents and users.",
    },
    {
      image: `${empowerment}`,
      title: "empowerment",
      description:
        "Empower talents to showcase their skills, passions, and potential to a broader audience.",
    },
  ];

  return <ValuesCard data={ValueData} />;
};
