import { Typography, Row } from 'antd';
import { Link } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./Collections.scss";

const { Title } = Typography;

const CollectionPreview = ({title, items, routeName}) => {
  return (
    <div className="collection-preview">
      <Title className="title">
        <Link to={`/shop/${routeName}`}>{title}</Link>
      </Title>
      <Row className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
          return (
            <CollectionItem 
              key={`${item.name}-${item.id}`} 
              item={item}
            />
          )
        })}
      </Row>
    </div>
    );
}

export default CollectionPreview;