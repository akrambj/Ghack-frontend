import { IoMdClose } from "react-icons/io";

const AddParticipant = ({ setAddParticipant }) => {
  return (
    <div className="absolute right-0 top-12 w-[350px] py-4 h-[160px] px-2 bg-white drop-shadow-md shadow-md flex flex-col rounded-lg duration-300 justify-between gap-4 z-50">
      <div className="flex items-center justify-between">
        <h2 className="text-lg uppercase font-bold text-[#0B3558]">
          Add Participant
        </h2>
        <IoMdClose
          className="text-2xl text-[#66DC90] cursor-pointer"
          onClick={() => setAddParticipant(false)}
        />
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center">
          <input
            className="px-2 w-[250px] py-3 border-[1px] border-[#A6BBD18F] rounded-2xl"
            type="email"
            placeholder="Email Address"
            name="manager"
          />
          <button className="bg-[#66DC90] py-3 px-5 text-white font-bold rounded-lg">
            Invite
          </button>
        </div>
        <h4 className="absolute right-[28%] bg-[#66DC9033] text-[#66DC90] px-2 py-1 rounded-md top-[20%]">
          Participant
        </h4>
      </div>
    </div>
  );
};

export default AddParticipant;
