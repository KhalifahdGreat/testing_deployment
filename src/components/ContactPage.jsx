import { Logo } from "./Logo";

export const ContactPage = () => {
  return (
    <div className='w-full max-h-full flex justify-center items-center'>
      <div className='w-3/4 h-contact mt-20 flex shadow-2xl rounded-full'>
        <div className='w-1/3  py-[33px] px-[51px] flex flex-col justify-center  '>
          <div>
            <Logo />
          </div>

          <div className='text-innovator font-poppins '>
            <h1 className='text-[64px] font-semibold leading-contact tracking-contact'>
              Let's talk
            </h1>
            <p className='text-2xl font-medium leading-button tracking-button'>
              For any questions or inquires, fill out the form and we will get
              back to you promptly!
            </p>
          </div>
        </div>
        {/* form */}
        <div className='w-2/3 bg-primary py-[33px] px-[51px]'>
          <form>
            <h1>
              fill the form <br /> to contact us
            </h1>

            <input type='text' placeholder='firstName' />
          </form>
        </div>
      </div>
    </div>
  );
};
