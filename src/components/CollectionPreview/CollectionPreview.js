import { Typography, Row, Col } from 'antd';

import CollectionItem from "../CollectionItem/CollectionItem";

import "./Collections.scss";

const { Title } = Typography;

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <Title className="title">{title}</Title>
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