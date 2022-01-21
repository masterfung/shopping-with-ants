import { useState, useEffect } from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import SHOP_DATA from './shop.data';

import "./Shop.scss";

const Shop = (props) => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop">
      { collections.map(({id, items, title, routeName}) => {
        return (<CollectionPreview key={`${title}-${id}`} items={items} title={title} />);
      })}
    </div>
  );
}

export default Shop;