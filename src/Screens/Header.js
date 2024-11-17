import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";

export const Header = () => {
  return (
    <div className='w-full flex justify-center pt-10 ' id='home'>
      <div className='w-11/12 flex-col h-header bg-primary rounded-header'>
        <div className='w-full flex justify-center '>
          <Nav />
        </div>

        <div className='w-full flex justify-center'>
          <Banner />
        </div>
        <div className='w-full flex justify-center'>
          <Button />
        </div>
      </div>
    </div>
  );
};
