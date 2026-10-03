import { X } from "lucide-react";
const LocationModal = ({ close }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-75 w-100 bg-gray-200 shadow-2xl rounded-2xl p-5 flex justify-between">
        <h2 className="text-xl font-medium">Where are you today?</h2>
        <button
          onClick={close}
          className="h-7 w-7 rounded-full p-1 bg-gray-300 flex justify-center items-center cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
