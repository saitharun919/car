import { FaHeart } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { FaGear } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { Button } from "antd";
import { carsData } from "./car_dataset";

type carData = {
  data:{Brand: string;
    Model: string;
    Year: number;
    Engine_Size: string;
    Fuel_Type: string;
    Transmission: string;
    Mileage: number;
    Doors: number;
    Owner_Count: number;
    Price: number;
    image: string;}
};
const Card = ({data}:carData) => {
  let {
    Brand,
    Model,
    Year,
    Engine_Size,
    Fuel_Type,
    Transmission,
    Mileage,
    Doors,
    Owner_Count,
    Price,
    image,
  } = data
  console.log(image)
  return (
    <div className="bg-white w-[200px] border rounded m-1 p-2 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-mono">{Brand}</h1>
          <span className="text-gray-400">{Model}</span>
        </div>
        <div>
          <Button
            type="primary"
            shape="circle"
            className="hover:bg-red-700 bg-transparent text-gray-700 border-gray-500 m-1 "
          >
            {<FaHeart />}
          </Button>
        </div>
      </div>
      <div>
        <img src={image} alt={Brand}/>
        
      </div>
      <div className="flex items-center justify-between">
        <div>
          <button className="text-gray-500">
            {<LuFuel />} {Fuel_Type}
          </button>
        </div>
        <div>
          <button className="text-gray-500">
            {<FaGear />} {Transmission}
          </button>
        </div>
        <div>
          <button className="text-gray-500">{<FaUsers />} 2 People</button>
        </div>
      </div>
      <div className="flex items-center justify-between m-1">
        <h1 className="text-gray-900 mt-1">
          £99.90/ <span className="text-gray-500">day</span>
        </h1>

        <Button className="mr-1" type="primary">
          Rent Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
