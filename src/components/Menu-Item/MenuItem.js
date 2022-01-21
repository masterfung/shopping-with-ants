import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router';

import "./MenuItem.scss";

const { Title } = Typography;

const MenuItem = ({ 
  imageUrl, 
  title, 
  size, 
  linkUrl
}) => {
  const navigate = useNavigate();

  return (
    <div 
    onClick={() => navigate(linkUrl)} 
    className={`menu-item ${!!size ? size : ""}`}>
      <div className='background-img'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      </div>
        <div className="content">
          <Title className="title">{title}</Title>
          <Button className="subtitle" size="default">Purchase</Button>
        </div>
    </div>
  );
};

export default MenuItem;