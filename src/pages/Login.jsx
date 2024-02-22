import hideIcon from "../assets/eye-off.svg";
import AuthButton from "../components/shared/UI/auth_button";
import SocialMediaAuthButtons from "../components/shared/UI/social_media_auth_buttons";

const Login = () => {
  return (
    <div
      className="flex flex-row self-center"
      style={{
        height: "80%",
      }}
    >
      <div className="flex flex-col">
        <div className="mb-12">
          <div className="flex items-center justify-center m-0">
            <div className="text-center">
              <h1 className="font-samsung-sharp-sans text-4xl font-bold leading-10 mb-6">
                Access to your account
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center  m-0">
            <div className="text-center">
              <p className="font-samsung-sharp-sans text-lg font-medium leading-7">
                Easily manage your Remote work with our intuitive platform.
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col">
          <div className="flex flex-col mb-3">
            <label className="font-samsung-sharp-sans text-lg font-medium mb-3">
              E-mail
            </label>
            <input
              type="email"
              className="border-b-2 border-gray-400 w-auto px-9 py-6 text-lg h-14"
              placeholder="Email adress"
              style={{
                borderRadius: "24px",
                border: "1.5px solid #A6BBD1",
                boxSizing: "border-box",
                fontSize: "18px",
              }}
            />
          </div>
          <div className="relative flex flex-col mb-6 ">
            <label className="font-samsung-sharp-sans text-lg font-medium mb-3">
              <div className="flex flex-row justify-between">
                <span> Password</span>{" "}
                <span className="text-blue"> Forgot password? </span>
              </div>
            </label>

            <input
              type="password"
              className="border-b-2 border-gray-400 w-auto pl-9 pr-14 py-6 text-lg h-14"
              placeholder="Password"
              style={{
                borderRadius: "24px",
                border: "1.5px solid #A6BBD1",
                boxSizing: "border-box",
                fontSize: "18px",
              }}
            />
            <button className="absolute right-4 bottom-3 ">
              <img src={hideIcon} alt="Hide Password" />
            </button>
          </div>
          <AuthButton text="Login" />
        </form>
        <div className="flex flex-row justify-between items-center my-12">
          <div
            className="border border-gray h-px "
            style={{
              width: "100%",
            }}
          ></div>

          <span className="mx-2 text-gray">OR</span>
          <div
            className="border border-gray h-px"
            style={{
              width: "100%",
            }}
          ></div>
        </div>
        <SocialMediaAuthButtons />
        <div className="flex flex-row justify-center mt-9 text-xl ">
          You haven’t an accout ?{" "}
          <span className="ml-1 text-blue font-bold">{"Signup"}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
