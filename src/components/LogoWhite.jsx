import logoWhite from "../assets/Scout-logo-white.svg";
export const LogoWhite = () => {
  return (
    <div className='inline-flex pt-2.5 gap-4 items-start justify-center'>
      <img src={`${logoWhite}`} alt='logo' className='w-logo h-logo' />
      <h1 className='text-white font-inter text-logo font-extrabold leading-logo tracking-logo capitalize'>
        scout
      </h1>
    </div>
  );
};
