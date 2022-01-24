import { useState, useEffect } from 'react';
import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import { HeartTwoTone } from '@ant-design/icons';

import NavBar from './components/NavBar/NavBar';
import { auth } from './firebase/firebase.utils';
import './App.scss';

const { Footer, Content } = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(( user => {
      setCurrentUser(user);
      console.log("THIS IS USER", user);
    }));
    return () => {
      return unsubscribeFromAuth();
    }
  }, []);

  return (
    <div className="App">
      <Layout className="header">
        <NavBar currentUser={currentUser} />
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
