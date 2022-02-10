import { useEffect } from "react";
import { Layout, Space } from "antd";
import { Outlet } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";

import NavBar from "./components/NavBar/NavBar";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/userSlice";
import { addCollectionAndDocuments } from "./firebase/firebase.utils";
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selectors";

import "./App.scss";

const { Footer, Content } = Layout;

const App = () => {
  const state = useSelector(state => state);
  const collections = selectShopCollectionsForPreview(state);
  const dispatch = useDispatch();
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const {id, email, displayName } = await createUserProfileDocument(userAuth);
        dispatch(setCurrentUser({
          id,
          email,
          displayName,
        }));
      } else {
        dispatch(setCurrentUser(userAuth));
      }
      
    });
    return () => {
      return unsubscribeFromAuth();
    }
  }, []);

  return (
    <div className="App">
      <Layout className="header">
        <NavBar />
      </Layout>
      <Layout>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
        <Footer className="footer">
          ©{new Date().getFullYear()} Made with <Space><HeartTwoTone twoToneColor="#eb2f96" /></Space> by Fantastic Wears Inc.
        </Footer>
      
    </div>
  );
}

export default App;
