import SocialMediaAuthButton from "./social_mdeia_auth_button";
import googleIcon from "../../../assets/google-icon.svg";
import microsoftIcon from "../../../assets/microsoft-icon.svg";

const SocialMediaAuthButtons = ({
  onGoogleButtonClicked,
  onMicrosoftButtonClicked,
}) => {
  return (
    <div className="flex flex-row justify-between ">
      <SocialMediaAuthButton
        icon={microsoftIcon}
        text="Microsoft"
        onClick={onMicrosoftButtonClicked}
      />
      <div className="w-2"></div>
      <SocialMediaAuthButton
        icon={googleIcon}
        text="Google"
        onClick={onGoogleButtonClicked}
      />
    </div>
  );
};

export default SocialMediaAuthButtons;
