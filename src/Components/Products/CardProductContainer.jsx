import React from "react";
import Row from "../Utility/Row";
import CardElement from "./Card";
import SubTitle from "../Utility/SubTitle";
import Loading from "../Utility/Loading";
import CardContainerHook from "../../hook/products/card-container-hook";

const CardProductContainer = ({ products, title, pathText, btntitle }) => {
  const [favProd] = CardContainerHook();
  console.log("products", products);
  return (
    <>
      {products ? (
        <SubTitle title={title} BtnTitle={btntitle} href={pathText} />
      ) : null}
      <Row>
        {products
          ? products.map((item, index) => (
              <CardElement
                key={index}
                item={item}
                favProd={favProd ? favProd : []}
              />
            ))
          : null}
      </Row>
    </>
  );
};
export default CardProductContainer;
{
  /* <CardElement
  imageUrl={require('../../images/labtop.png')}
  title="Wooden House, Florida"
  rating={5.0}
  description="Enter a freshly updated and thoughtfully furnished peaceful home"
  navigateUrl="/products/:id"
/> */
}
