import { Typography, Button } from 'antd';

import "./HomePage.scss";

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <Title className='title'>Hats</Title>
          <Button className='subtitle' size="default">Purchase</Button>
        </div>
      </div>
    </div>
    </div>
  )
};

export default HomePage;