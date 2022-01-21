import React from 'react';
import { Layout, Space } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { HeartTwoTone } from '@ant-design/icons';

import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

import './App.scss';

const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <NavBar />
        <Outlet />
        <Footer className="footer">
          ©{new Date().getFullYear()} Made with <Space><HeartTwoTone twoToneColor="#eb2f96" /></Space> by Fantastic Wears Inc.
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
