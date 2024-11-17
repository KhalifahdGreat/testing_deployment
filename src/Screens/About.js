import { SectionHeader } from "../components/SectionHeader";

export const About = () => {
  return (
    <div
      className='w-full flex flex-col items-center mb-sectionBottom'
      id='about us'>
      <SectionHeader header={"about us"} />

      <div className='laptop:w-aboutParagraph laptop:h-aboutParagraph shrink-0 text-navText font-poppins laptop:text-aboutParagraph font-normal flex flex-col justify-between phone:p-5 phone:text-2xl'>
        <p className='phone:pb-10 laptop:pb-0'>
          Welcome to <span className='text-innovator '>Scout</span>, a
          groundbreaking platform founded with a passion for discovering and
          connecting talents with scouts and companies. Our journey is just
          beginning, driven by the belief that every talent deserves
          recognition, and every company deserves exceptional individuals.
        </p>
        <p>
          As we embark on this exciting venture, our focus remains on creating a
          space where potential meets opportunity, and where the next generation
          of Nigerian talents find their stage to shine. Join us on this journey
          as we redefine the landscape of talent scouting and pave the way for
          success stories yet to be told.
        </p>
      </div>
    </div>
  );
};
