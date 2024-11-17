import { SectionHeader } from "../components/SectionHeader";

export const Mission = () => {
  return (
    <div
      className='w-full flex flex-col items-center mb-sectionBottom'
      id='mission'>
      <SectionHeader header={"our mission"} />

      <div className='laptop:w-aboutParagraph laptop:h-aboutParagraph shrink-0 text-navText font-poppins laptop:text-aboutParagraph font-normal flex flex-col justify-between phone:p-5 phone:text-2xl '>
        <p>
          At <span className='text-innovator'>Scout</span>, we understand the
          transformative power of connecting talent with opportunities. Our
          team, a dedicated group of visionaries, brings diverse expertise and a
          shared commitment to fostering a thriving ecosystem for talents and
          scouts alike.
        </p>
      </div>
    </div>
  );
};
