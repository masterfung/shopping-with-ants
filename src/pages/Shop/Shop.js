import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import ShopPageContainer from "./Shop.styles";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shopSlice";
import { Spin } from "antd";

const Shop = () => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const collectionRef = collection(db, "collections");
    const querySnapshot = await getDocs(collectionRef);
    const collectionMap = convertCollectionsSnapshotToMap(querySnapshot);
    console.log(collectionMap);
    dispatch(updateCollections(collectionMap));
    setLoading(!loading);

  }, []);

  return (
    <ShopPageContainer>
      {loading ? <Spin /> : <Outlet />}
    </ShopPageContainer>
  );
}

export default Shop;