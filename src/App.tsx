import React from "react";
import { Breadcrumb, Layout, Menu, Row, Col, Image, Input, theme } from "antd";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaBell,  FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Button } from "antd";
import Home from "./Home";

const { Header, Content, Footer } = Layout;
const menus = [
  { menuName: "Home", menuId: 1, menuPath: "/home" },
  { menuName: "About", menuId: 2, menuPath: "/about" },
  { menuName: "Services", menuId: 3, menuPath: "/services" },
];

const items = menus.map((item, index) => ({
  key: item.menuId,
  label: <Link to={item.menuPath}>{item.menuName}</Link>,
}));

const App: React.FC = () => {

 const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Row className="w-full">
          <Col
            md={5}
            lg={5}
            className=" flex items-center justify-start font-semibold text-2xl text-[#3563E9] "
          >
            LOGO
          </Col>
          <Col
            md={13}
            lg={13}
            className=" flex items-center justify-center"
          >
            <Search
              addonBefore="Car Model"
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 304 }}
            />
          </Col>
          <Col
            md={6}
            lg={6}
            className="flex items-center justify-center gap-2  "
          >
            <Button onClick={()=>navigate("/")}>{<FaHome color="#596780" />}</Button>
            <Button onClick={()=>navigate("/about")}>{<FaBell color="#596780" />}</Button>
            <Button onClick={()=>navigate("/services")}>{<IoMdSettings color="#596780" />}</Button>

            <Image  height={"40px"} width={"40px"} />
          </Col>
        </Row>
      </Header>
      <Content className="px-[20px] py-[10px]">
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>about us</h1>} />
            <Route path="/services" element={<h1>services</h1>} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
