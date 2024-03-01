const SocialMediaAuthButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl text-Typo  text-2xl font-bold border border-Gray66 py-4 "
      style={{
        fontSize: "18px",
        width: "100%",
      }}
    >
      <div className="flex flex-row  justify-center">
        <img src={icon} alt="Google" className="mr-1" />
        {text}
      </div>
    </button>
  );
};

export default SocialMediaAuthButton;
