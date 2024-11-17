import { SectionHeader } from "../components/SectionHeader";
import { ValueDate } from "../components/ValueDate";

export const Values = () => {
  return (
    <div className='w-full flex flex-col  items-center' id='our value'>
      <SectionHeader header={"our Values"} />
      <div className='phone:flex phone:flex-col phon:items-center phone:justify-center'>
        <ValueDate />
      </div>
    </div>
  );
};
