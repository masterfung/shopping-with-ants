import { Outlet } from 'react-router-dom';
import ShopPageContainer from './Shop.styles';

const Shop = () => {
  return (
    <ShopPageContainer>
      <Outlet />
    </ShopPageContainer>
  );
}

export default Shop;