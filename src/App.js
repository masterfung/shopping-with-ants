import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

import HomePage from './HomePage';

import './App.scss';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={1}>About</Menu.Item>
          <Menu.Item key={2}>Sign Up</Menu.Item>
          </Menu>
        </Header>
        <Content className='content-app'>
          <Row>
            <Col span={8}><HomePage /></Col>
            <Col span={8}><HomePage /></Col>
            <Col span={8}><HomePage /></Col>
          </Row>
          <Row>
            <Col span={12}><HomePage /></Col>
            <Col span={12}><HomePage /></Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} Made with Love By Fantastic Wears Inc.</Footer>
      </Layout>
    </div>
  );
}

export default App;
