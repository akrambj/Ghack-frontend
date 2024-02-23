import FAQ from "../../components/manager/support/FAQ";
import x from "../../assets/imgs/support/x.png";
import Instagram from "../../assets/imgs/support/Instagram.png";
import Facebook from "../../assets/imgs/support/Facebook.png";
import Gmail from "../../assets/imgs/support/Gmail.png";


const Support = () => {
  return <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-16 my-16">
          <h1 className="text-5xl capitalize font-bold text-[#0B3558]">
          Let’s keep in touch
          </h1>
          <div className="flex flex-col imtes-center gap-16">
            <div className="flex gap-16">
              <div className="flex gap-8 items-center">
                <img src={Instagram} alt="" />
                <p>la_bengherbia@esi.dz</p>
              </div>
              <div className="flex gap-8 items-center">
                <img src={Facebook} alt="" />
                <p>la_bengherbia@esi.dz</p>
              </div>
            </div>
            <div className="flex gap-16">
            <div className="flex gap-8 items-center">
                <img  src={x} alt="" />
                <p>la_bengherbia@esi.dz</p>
              </div>
              <div className="flex gap-8 items-center">
                <img src={Gmail} alt="" />
                <p>la_bengherbia@esi.dz</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 my-16">
          <h1 className="text-5xl capitalize font-bold text-[#0B3558]">
          Frequently Asked Questions
          </h1>
          <FAQ />
        </div>
        
  </div>;
};

export default Support;
