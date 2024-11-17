import { FooterNavItem } from "./FooterNavItem";

export const FooterNav = () => {
  const company = ["about", "team", "contact"];
  const product = ["services", "pricing"];
  const legal = ["terms and conditions", "privacy policy"];
  const follow = ["twitter", "instagram", "linkedin"];
  return (
    <div className='w-full flex justify-center laptop:px-[136px] laptop:gap-[100px] pt-[72px] phone:flex-col tablet:flex-row laptop:flex-row phone:gap-0 tablet:gap-[100px] phone:px-0 '>
      <FooterNavItem title={"company"} navList={company} />
      <FooterNavItem title={"product"} navList={product} />
      <FooterNavItem title={"legal"} navList={legal} />
      <FooterNavItem title={"follow us"} navList={follow} />
    </div>
  );
};
