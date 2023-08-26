import React from "react";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import baseUrl from "../../Api/baseURL.js";
import Loading from "../../Components/Utility/Loading";
import ReactPagination from "../../Components/Utility/ReactPagination";
export function ProductCard({ item }) {
  console.log(item.product.imageCover);
  return (
    <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2 bg-red-50 w-full">
      <div className="w-full flex md:w-64 justify-center items-center">
        <img
          className="md:w-3/4 object-contain object-center"
          src={baseUrl.getUri() + "/products/" + item.product.imageCover}
          alt={item.product.title || ""}
        />
      </div>
      <div className="w-full flex flex-col gap-y-4 gap-2">
        <div className="flex justify-between items-center ">
          <div className=" text-gray-700 mt-4 flex gap-2 font-semibold">
            {" "}
            <p>{item.product.title || ""}</p>
            <p className="text-yellow-600">
              {item.product.ratingsAverage ? item.product.ratingsAverage : 0}
            </p>
            <p>({`${item.product.ratingsQuantity || 0} تقييم`})</p>
          </div>
        </div>
        <p className="text-xl bold">
          الكمية:{" "}
          <span className="text-lg ">
            <input
              type="number"
              id="Quantity"
              value={item.count}
              className="h-6 outline-none  w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
          </span>
        </p>
        <div
          className="w-6 h-6 rounded-full mx-auto md:mx-0 "
          style={{ backgroundColor: item.color }}
        ></div>
      </div>
    </div>
  );
}

export function UserOrder({ products }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  console.log(products);
  return (
    <>
      <div className="flex w-full flex-col p-4 border-4 border-red-500 items-center justify-center rounded-lg">
        <h4 className="font-bold text-red-900 text-xl mb-4">
          طلب رقم #{products.id || 0} ...تم بتاريخ{" "}
          {formatDate(products.createdAt)}
        </h4>
        {products.cartItems
          ? products.cartItems.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))
          : null}
        <div className=" flex flex-col md:flex-row w-full gap-4  items-center ">
          <div className="flex gap-2">
            <div className=" font-bold "> التوصيل</div>
            <div className="text-red-800 font-bold">
              {products.isDelivered === true ? "تم التوصيل" : "لم يتم "}
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" font-bold "> الدفع</div>
            <div className="text-red-800 font-bold">
              {products.isPaid === true ? "تم الدفع" : "لم يتم "}
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" font-bold "> طريقة الدفع</div>
            <div className="text-red-800 font-bold">
              {products.paymentMethodType === "cash" ? "كاش" : "بطاقة ائتمانية"}{" "}
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" font-bold "> السعر</div>
            <div className="text-red-800 font-bold">
              {products.totalOrderPrice || 0} جنية{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const UserAllOrdersPage = () => {
  const [userName, results, paginate, orderData, onPress, loading] =
    UserGetAllOrderHook();

  return (
    <>
      <div className=" overflow-x-hidden w-full flex h-full">
        <SideBar menus={UserMenu} />

        {/* orderd container for all orders  */}
        <div className="flex w-3/4 flex-col gap-4  p-2  ">
          {/* order data */}
          <h2 className=" font-bold text-red-900 text-2xl">
            عدد الطلبات #{results}
          </h2>
          {loading == false ? (
            orderData.length >= 1 ? (
              orderData.map((orderItem, index) => {
                return <UserOrder key={index} products={orderItem} />;
              })
            ) : (
              <h6>لا يوجد طلبات حتى </h6>
            )
          ) : (
            <Loading />
          )}
          {paginate.numberOfPages >= 2 ? (
            <ReactPagination
              onPress={onPress}
              pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default UserAllOrdersPage;
