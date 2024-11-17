import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { AppContext } from "../App";
import { useContext } from "react";
import { SideNav } from "./sideNav";
import { Link as RouterLink } from "react-router-dom";

export const Nav = () => {
  const nav = ["home", "about us", "mission", "our value"];
  const { toggle } = useContext(AppContext);

  return (
    <div className='w-11/12 h-nav mt-10 rounded-header bg-white '>
      <div className='w-full h-full flex justify-between items-center pl-20 phone:pl-4 pr-4'>
        <Logo />
        <div className='w-2/5 phone:hidden laptop:block tablet:block'>
          <Fade cascade damping={0.2} triggerOnce={true}>
            <ul className='w-full flex justify-center capitalize font-poppins font-medium text-navText text-base'>
              {nav.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='pl-8 hover:text-innovator transition-colors duration-300 ease-in-out whitespace-nowrap'>
                    <ScrollLink
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      className='cursor-pointer'>
                      {item}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>

        <div>
          <RouterLink
            to='/contact'
            className='bg-primary p-2.5 text-base font-medium rounded-contact text-white capitalize phone:hidden tablet:block laptop:block'>
            contact us
          </RouterLink>
        </div>

        <button
          onClick={toggle}
          className='text-2xl tablet:hidden laptop:hidden text-innovator'>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
};
