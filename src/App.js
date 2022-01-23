import React from 'react';
import { Layout, Space } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { HeartTwoTone } from '@ant-design/icons';

import NavBar from './components/NavBar/NavBar';

import './App.scss';

const { Footer, Content } = Layout;

function App() {
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
