import { Col, Row, Typography, Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cartSlice";

import "./CollectionItem.scss";

const { Text } = Typography;

const CollectionItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <Col className="collection-item gutter-row" span={6}>
      <Row>
        <Col span={20} offset={4} className="collection-container">
          <div className="image">
            <img src={item.imageUrl}></img>
          </div>
          <Col className="collection-footer" span={20} offset={2}>
            <span className="name"><Text>{item.name}</Text></span>
            <span className="price"><Text>${item.price}</Text></span>
          </Col>
          <Button className="add-to-cart" ghost type="primary" onClick={() => dispatch(addCartItem(item))}>Add to Cart</Button>
        </Col>
      </Row>
    </Col>
    );
}

export default CollectionItem;