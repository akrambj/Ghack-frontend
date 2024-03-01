import mark from "../../assets/imgs/testimonials/mark.webp";

const Testimonial = ({ item, followIndex, index }) => {
  return (
    <div
      className={`${
        followIndex === index ? "h-full self-end w-[18vw] h-[70vh] -order-1" : ""
      } w-[10vw] h-[240px] p-2 transition-all ease-in duration-500`}
    >
      {followIndex === index && (
        <div className="absolute  right-0 top-0 w-[70%] h-[50%]  flex flex-col gap-5">
          <div>
            <h4 className="text-2xl font-bold uppercase text-Typo">
              {item.name}
            </h4>
          </div>
          <div className="flex gap-4">
            <img className="w-10 h-10 object-cover" src={mark} alt="mark" />
            <h3 className="text-Typo font-bold uppercase w-[80%] text-[2.5rem]">
              {item.testimonial}
            </h3>
          </div>
        </div>
      )}
      <img className="w-full h-full object-cover rounded-[16px]" src={item.img} alt="" />
    </div>
  );
};

export default Testimonial;
