import { Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";

import "./CartDropdown.scss";

const menu = (
  <Menu className="cart-dropdown">
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const Cart = () => {
  const hidden = useSelector(state => state.cart.hidden)
  return (
    hidden 
    ? <CartIcon />
    : <Dropdown overlay={menu}>
      <span onClick={e => e.preventDefault()}>
        <CartIcon />
      </span>
    </Dropdown>
  )
};

export default Cart;