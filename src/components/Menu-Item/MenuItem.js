import { Typography, Button } from 'antd';
import "./MenuItem.scss";

const { Title } = Typography;

const MenuItem = ({ imageUrl, title, size}) => {
  return (
    <div className={`menu-item ${!!size ? size : ""}`} style={{
      backgroundImage: `url(${imageUrl})`
    }}>
      <div className="content">
        <Title className="title">{title}</Title>
        <Button className="subtitle" size="default">Purchase</Button>
      </div>
    </div>
  );
};

export default MenuItem;