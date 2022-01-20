import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={1}>About</Menu.Item>
          <Menu.Item key={2}>Sign Up</Menu.Item>
          </Menu>
        </Header>
  );
};

export default NavBar