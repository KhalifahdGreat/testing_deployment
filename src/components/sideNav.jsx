import { AppContext } from "../App";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export const SideNav = () => {
  const { state, toggle } = useContext(AppContext);
  const nav = ["home", "about us", "mission", "our value"];

  return (
    <div
      className={`w-1/2 h-full fixed top-0 right-0 bg-white transition-transform duration-500 ease-in-out z-10 laptop:hidden tablet:hidden ${
        state ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className='w-full h-full flex flex-col pt-16 '>
        <button
          onClick={toggle}
          className='absolute top-4 right-4 text-innovator text-2xl transition-colors duration-300 ease-in-out'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className='w-full flex  '>
          <ul className='w-full  flex-col   capitalize font-poppins font-medium text-navText text-base'>
            {nav.map((item, index) => (
              <li
                key={index}
                className='w-full text-innovator  flex item-start py-5 px-10 whitespace-nowrap border-b-2'>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  className='cursor-pointer'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
