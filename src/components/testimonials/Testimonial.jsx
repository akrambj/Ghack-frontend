import mark from "../../assets/imgs/testimonials/mark.png";

const Testimonial = ({ item, followIndex, index }) => {
  return (
    <div
      className={`${
        followIndex === index ? "h-full self-start w-[15%] -order-1" : ""
      } w-[10%] h-[240px] p-2 ease-in-out duration-300 `}
    >
      {followIndex === index && (
        <div className="absolute py-4 right-0 top-0 w-[70%] h-[50%]  flex flex-col gap-5">
          <div>
            <h4 className="text-2xl font-bold uppercase text-[#0B3558]">
              {item.name}
            </h4>
          </div>
          <div className="flex  gap-4">
            <img className="w-10 h-10 object-cover" src={mark} alt="mark" />
            <h3 className="text-[#0B3558] font-bold uppercase w-[60%] text-2xl">
              {item.testimonial}
            </h3>
          </div>
        </div>
      )}
      <img className="w-full h-full object-cover" src={item.img} alt="" />
    </div>
  );
};

export default Testimonial;
