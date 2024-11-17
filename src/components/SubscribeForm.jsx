export const SubscribeForm = () => {
  return (
    <div>
      <h2 className='text-white font-poppins laptop:text-2xl font-bold pb-[21px] phone:text-xl'>
        Subscribe to our newsletter
      </h2>

      <form className='flex gap-5'>
        <input
          type='text'
          placeholder='Your Email'
          className='laptop:w-[365px] laptop:h-[70px] rounded-contact shrink-0 px-2.5 py-4 text-input font-poppins text-xl phone:w-[200px] outline-none font-normal'
        />
        <input
          type='button'
          value='Subscribe'
          className='w-[183px] h-[70px] p-2.5 flex justify-center items-center gap-2.5 bg-shrink-0 bg-subscribeBtn rounded-contact text-white font-poppins text-xl font-semibold'
        />
      </form>
    </div>
  );
};
