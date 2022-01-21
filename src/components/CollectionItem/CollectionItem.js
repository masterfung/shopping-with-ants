import { Col, Row, Typography } from 'antd';

import "./CollectionItem.scss";

const { Text } = Typography;

const CollectionItem = ({imageUrl, name, price}) => {
  return (
    <Col className="collection-item gutter-row" span={6}>
      <Row>
        <Col span={20} offset={4}>
          <div className="image">
            <img src={imageUrl}></img>
          </div>
          <Col className="collection-footer" span={20} offset={2}>
            <span className="name"><Text>{name}</Text></span>
            <span className="price"><Text>${price}</Text></span>
          </Col>
        </Col>
      </Row>
    </Col>
    );
}

export default CollectionItem;