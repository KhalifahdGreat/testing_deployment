export const FooterNavItem = ({ title, navList }) => {
  return (
    <div className='w-full   flex tablet:flex-col laptop:flex-col phone:flex-row text-white font-poppins  laptop:items-start desktop:items-start phone:items-baseline phone:gap-4 capitalize'>
      <h1 className='pb-[12px] font-semibold text-2xl whitespace-nowrap'>
        {title}
      </h1>
      <ul className='phone:flex laptop:flex-col tablet:flex-col'>
        {navList.map((item, index) => {
          return (
            <li
              key={index}
              className='pb-[22px] font-light font-xm hover:text-innovator transition-colors duration-300 ease-in-out  phone:pr-2 whitespace-nowrap'>
              <a href='/'> {item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
