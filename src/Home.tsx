import { Row, Col, DatePicker } from "antd";
import Card from "./Components/Card";
import SideBar from "./Components/SideBar";

import {carsData} from "./Components/car_dataset";

const Home = () => {

  const carSlice = carsData.slice(0,20);
  console.log(carSlice)
  return (
    <Row className="h-full">

     {/* sidebar */}

      <Col lg={6} className="border border-1 h-full">
        <SideBar />
      </Col>

      {/* main body */}

      <Col lg={18} className="border border-1 h-full">
      <Row gutter={[12,12]} className="gap-2">
      {carSlice.map((item) =>(
       <Card data = {item} />
      ))}
      </Row>
      </Col>
    </Row>
  );
};

export default Home;
