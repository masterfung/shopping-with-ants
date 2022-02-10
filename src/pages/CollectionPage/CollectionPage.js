import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Typography } from "antd";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.scss";

const { Title } = Typography;

const CollectionPage = () => {
  const location = useLocation();
  const state = useSelector(state=> state);
  const collection = selectCollection(location.pathname.split("/")[2])(state);

  return (
    <div className="collection-page">
      <Title>{collection.title}</Title>
      <div className="items">
      { collection.items.map(item => <CollectionItem key={`item-entity-${item.id}-${item.price}`} item={item} />)}
      </div>
    </div>
  )
};

export default CollectionPage;