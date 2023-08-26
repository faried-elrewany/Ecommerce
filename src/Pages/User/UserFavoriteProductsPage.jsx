import React, { useState, useEffect } from "react";
import CardElement from "../../Components/Products/Card";
import Row from "../../Components/Utility/Row";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "../../redux/actions/wishListAction";

import FavouriteCard from "../../Components/Products/FavouriteCard";
import CardContainerHook from "../../hook/products/card-container-hook";
import Loading from "../../Components/Utility/Loading";

const UserFavoriteProductsPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.addToWishListReducer.allWishList);
  useEffect(() => {
    console.log(res);
    if (loading === false) {
      if (res) setItems(res.data);
    }
  }, [loading]);
  const [favProd] = CardContainerHook();

  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div>
          <h2 className="self-start font-bold m-2 text-red-900 text-2xl">
            منتجاتك المفضلة
          </h2>
          <div className="flex flex-wrap gap-4 p-2">
            {loading == false ? (
              items && items.length >= 1 ? (
                items.map((item, index) => (
                  <FavouriteCard key={index} item={item} favProd={favProd} />
                ))
              ) : (
                <h4 className="text-xl text-red-900">
                  لا يوجد منتجات في قائمة المفضلة
                </h4>
              )
            ) : (
              <Loading />
            )}
            {/* {items && items.length <= 0 ? (
              <h6>لا يوجد منتجات مفضله حاليا</h6>
            ) : items ? (
              items &&
              items.map((item, index) => (
                <FavouriteCard key={index} item={item} favProd={favProd} />
              ))
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavoriteProductsPage;
