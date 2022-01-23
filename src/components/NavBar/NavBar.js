import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

import "./NavBar.scss";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className="header">
      <div className="logo">
        <Link to="/"><Logo /></Link>
      </div>
      <Menu mode="horizontal" className="menu-system">
        <Menu.Item key={1}>
          <Link to="/shop">SHOP</Link>
        </Menu.Item>
        <Menu.Item key={2}>CONTACT</Menu.Item>
        <Menu.Item key={3}><Link to="/signIn">SIGN IN</Link></Menu.Item>
        <Menu.Item key={4}>CART</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar