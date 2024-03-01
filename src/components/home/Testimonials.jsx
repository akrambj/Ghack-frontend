import { useEffect, useState } from "react";
import test01 from "../../assets/imgs/testimonials/test01.webp";
import test02 from "../../assets/imgs/testimonials/test02.webp";
import test03 from "../../assets/imgs/testimonials/test03.webp";
import test04 from "../../assets/imgs/testimonials/test04.webp";
import test05 from "../../assets/imgs/testimonials/test05.webp";
import test06 from "../../assets/imgs/testimonials/test06.webp";
import Testimonial from "../testimonials/Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R., Software Engineer",
      img: test01,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
    {
      name: "akram R., Software Engineer",
      img: test02,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
    {
      name: "Emily R., Software Engineer",
      img: test03,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
    {
      name: "Emily R., Software Engineer",
      img: test04,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
    {
      name: "Emily R., Software Engineer",
      img: test05,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
    {
      name: "Emily R., Software Engineer",
      img: test06,
      testimonial:
        "OneCLICK Personal Workspaces streamline file sharing, making collaboration effortless.",
    },
  ];
  const [followIndex, setFollowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFollowIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="w-screen overflow-hidden flex items-center justify-center"
    >
      <div className="w-full relative flex items-end h-[80%] justify-center justify-between px-[10vw]">
        {testimonials.map((item, index) => (
          <Testimonial
            key={index}
            item={item}
            index={index}
            followIndex={followIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
