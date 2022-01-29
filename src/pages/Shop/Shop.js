import { Outlet } from 'react-router-dom';
import "./Shop.scss";

const Shop = () => {
  return (
    <div className="shop-page">
    <Outlet />
    </div>
  );
}

export default Shop;