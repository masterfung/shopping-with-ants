import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
      <Menu.Item key={1}>
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key={2}>Contact</Menu.Item>
      <Menu.Item key={3}>Sign Up</Menu.Item>
      <Menu.Item key={4}>Cart</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar