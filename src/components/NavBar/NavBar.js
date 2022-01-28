import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import { setCurrentUser } from "../../redux/user/userSlice";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden, selectCurrentUser } from "../../redux/user/user.reselectors";

import "./NavBar.scss";

const { Header } = Layout;

const NavBar = () => {
  const state = useSelector(state => state);
  const currentUser = selectCurrentUser(state);
  const hidden = selectCartHidden(state);

  const dispatch = useDispatch();
  return (
    <Header className="header">
      <div className="logo">
        <Link to="/"><Logo /></Link>
      </div>
      <Menu mode="horizontal" className="menu-system">
        <Menu.Item key="menu-shopping">
          <Link to="/shop">SHOP</Link>
        </Menu.Item>
        <Menu.Item key="menu-contact">CONTACT</Menu.Item>
        <Menu.Item key="menu-sign-in-sign-up">
        { 
          ( currentUser?.email )
          ? <Link to="/" onClick={() => {
            auth.signOut();
            dispatch(setCurrentUser(null))
          }}>SIGN OUT</Link>
          : <Link to="/signin">SIGN IN</Link>
         }
        </Menu.Item>
        <Menu.Item key="menu-cart-nav">
          <CartDropdown />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar