export const SectionHeader = (prop) => {
  return (
    <div className='mt-about pb-6'>
      <h1 className='text-innovator text-center font-poppins text-sectionHeader font-bold leading-sectionHeader tracking-sectionHeader capitalize'>
        {prop.header}
      </h1>
    </div>
  );
};
