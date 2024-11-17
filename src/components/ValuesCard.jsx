import { Fade } from "react-awesome-reveal";

export const ValuesCard = ({ data }) => {
  const colorClasses = ["bg-discover", "bg-transparency", "bg-empowerment"];
  return (
    <div className='w-full flex justify-center gap-5 phone:flex-col tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-2 desktop:grid desktop:grid-cols-3'>
      {data.map((item, index) => {
        return (
          <Fade
            direction='up'
            cascade={false}
            delay={index * 100}
            triggerOnce={true}>
            <div
              className={`laptop:w-valueCard laptop:h-valueCard phone:w-[350px] phone:h-[450px] pt-valueCardTop rounded-contact shrink-0 ${
                colorClasses[index] || ""
              }`}
              key={index}>
              <div className='pl-valueCardTopLeftIcon pb-valueCarddown'>
                <img src={`${item.image}`} alt='' className='w-icon h-icon' />
              </div>
              <div className='pl-valueCardTitleLeft font-poppins  pr-valueCardTitleRight '>
                <div className='pb-valueCarddown text-navText text-aboutParagraph font-semibold capitalize'>
                  <h1>{item.title}</h1>
                </div>

                <div className='text-valueParagraph text-xl font-normal shrink-0 '>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
};
