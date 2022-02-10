import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import "./CollectionsOverview.scss";

const CollectionsOverview = () => {
  const state = useSelector(state => state);
  const collections = selectShopCollectionsForPreview(state);

  return (
    <div className="collections-overview">
      { collections.map(({id, items, title, routeName}) => {
        return (<CollectionPreview key={`${title}-${id}`} items={items} title={title} routeName={routeName} />);
      })}
    </div>
  )
};

export default CollectionsOverview;