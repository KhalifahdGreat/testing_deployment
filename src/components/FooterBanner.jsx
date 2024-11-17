import { FooterNav } from "./FooterNav";
import { LogoWhite } from "./LogoWhite";
import { SubscribeForm } from "./SubscribeForm";

export const FooterBanner = () => {
  return (
    <div
      className='w-full h-footer
     bg-footer mt-footer rounded-t-header laptop:px-[59px] phone:px-[20px]'>
      <div className='w-full flex justify-between  laptop:pt-[83px] laptop:pb-[58px] phone:flex-col phone:pt-[50px]  phone:pb-0 tablet:flex-row laptop:flex-row'>
        <div>
          <LogoWhite />
        </div>
        <div>
          <SubscribeForm />
        </div>
      </div>
      <div className='w-full border-t-2border-line'></div>

      <div>
        <FooterNav />
      </div>
    </div>
  );
};
