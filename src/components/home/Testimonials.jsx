import { useEffect, useState } from "react";
import test01 from "../../assets/imgs/testimonials/test01.png";
import test02 from "../../assets/imgs/testimonials/test02.png";
import test03 from "../../assets/imgs/testimonials/test03.png";
import test04 from "../../assets/imgs/testimonials/test04.png";
import test05 from "../../assets/imgs/testimonials/test05.png";
import test06 from "../../assets/imgs/testimonials/test06.png";
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
    <section className="w-screen h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="w-full relative flex items-end h-[80%] justify-center gap-5">
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
