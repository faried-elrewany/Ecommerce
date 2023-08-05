import React from "react";
import Row from "../Utility/Row";
import CardElement from "./Card";
import SubTitle from "../Utility/SubTitle";

const CardProductContainer = ({ products, title, pathText, btntitle }) => {
  return (
    <Row>
      {/* {products ? (
        <SubTitle title={title} btntitle={btntitle} href={pathText} />
      ) : null}
      className='my-2 d-flex justify-content-between'>
      {products
        ? products.map((item, index) => <CardElement key={index} item={item} />)
        : null} */}
    </Row>
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
