import { PiNotePencil } from "react-icons/pi";
import { ImBin } from "react-icons/im";
const Card = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <input
        type="text"
        placeholder="     Add Your Name"
        readOnly
        className="bg-base-300  w-full focus:hidden cursor-pointer  py-2 rounded-lg"
      />
      <div className=" flex items-center gap-1 text-[#96C93B]">
        <PiNotePencil className="text-3xl shadow-sm cursor-pointer" />
        <ImBin className="text-3xl shadow-sm cursor-pointer p-1" />
      </div>
    </div>
  );
};

export default Card;
