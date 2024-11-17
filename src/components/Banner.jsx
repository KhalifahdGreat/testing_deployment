import Fade from "react-awesome-reveal";

export const Banner = () => {
  return (
    <div className='w-full m-banner  '>
      <Fade direction='down' cascade={false} delay={100} triggerOnce={true}>
        <h1 className='text-white text-center font-poppins laptop:text-4xl phone:text-2xl font-light leading-banner tracking-banner'>
          Connecting{" "}
          <span className='text-innovator font-medium'>Innovators</span>
          <br /> to a World of Opportunities
        </h1>
      </Fade>
    </div>
  );
};
