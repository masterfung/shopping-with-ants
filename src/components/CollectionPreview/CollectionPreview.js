import { Typography, Row, Col } from 'antd';

import CollectionItem from "../CollectionItem/CollectionItem";

import "./Collections.scss";

const { Title, Text } = Typography;

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <Title className="title">{title}</Title>
      <Row className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, name, imageUrl, price}) => {
          return (
            <CollectionItem 
              key={`${name}-${id}`} 
              id={id} 
              name={name} 
              price={price} 
              imageUrl={imageUrl} 
            />
          )
        })}
      </Row>
    </div>
    );
}

export default CollectionPreview;