const SocialMediaAuthButton = ({ icon, text }) => {
  return (
    <button
      className="bg-white rounded-xl text-darkBlue  text-2xl font-bold border border-gray py-4 "
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
