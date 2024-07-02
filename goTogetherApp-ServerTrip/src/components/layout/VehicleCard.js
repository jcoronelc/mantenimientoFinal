import { FaCarSide } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

function VehicleCard({ name, brand, color, passengers, plate, onDelete, index }) {
    return (
        <div className="flex bg-white border border-gray-200 rounded-lg shadow-md mt-2 mb-2 w-full">
            <div className="flex flex-col m-4 space-y-4 w-full">
                <div className="flex flex-row justify-between items-center m-2">
                    <div className="flex flex-row items-center space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="name-profile" className="font-bold">{name}</label>
                            {/* <StarsRating stars={3} color="text-blue-400" /> */}
                        </div>
                    </div>

                    <div className="flex">
                    <button type="button"
                            className="w-10 h-10  text-blue-50 bg-red-50 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm  text-center" title='Eliminar' onClick={() => onDelete(index)}>
                            <div className="flex items-center justify-center">
                                <RiDeleteBin6Line className=" text-red-600 hover:text-red-50" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="border-t border-blue-400 "></div>


                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-700 text-center rounded-lg flex items-center justify-center">
                            <FaCarSide className="text-gray-50" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className="font-semibold">{brand}</label>
                            <label className="text-sm">{color}</label>
                            <label className="text-sm">{passengers} pasajeros</label>
                            <label className="text-sm">{plate}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;
