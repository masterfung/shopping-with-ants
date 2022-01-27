import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import { setCurrentUser } from "../../redux/user/userSlice";
import CartDropdown from "../CartDropdown/CartDropdown";

import "./NavBar.scss";

const { Header } = Layout;

const NavBar = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
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
        <Menu.Item key={3}>
        { 
          ( currentUser?.email )
          ? <Link to="/" onClick={() => {
            auth.signOut();
            dispatch(setCurrentUser(null))
          }}>SIGN OUT</Link>
          : <Link to="/signIn">SIGN IN</Link>
         }
        </Menu.Item>
        <Menu.Item key={4}>
          <CartDropdown />
          
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar