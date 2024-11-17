import logo from "../assets/Scout-logo.svg";
export const Logo = () => {
  return (
    <div className='inline-flex pt-2.5 gap-4 items-start justify-center phone:items-center phone:gap-2'>
      <img src={`${logo}`} alt='logo' className='w-logo h-logo' />
      <h1 className='text-primary font-inter text-logo font-extrabold leading-logo tracking-logo capitalize phone:text-xl '>
        scout
      </h1>
    </div>
  );
};
