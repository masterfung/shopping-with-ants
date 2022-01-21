import { Layout } from 'antd';
import Directory from '../../components/Directory/Directory';

import "./HomePage.scss";

const { Content } = Layout;

const HomePage = () => {
  return (
    <Content className='content-app homepage'>
      <Directory />
    </Content>
  );
};

export default HomePage;