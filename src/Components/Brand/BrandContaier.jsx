import React from "react";
import Container from "../Utility/Container.jsx";
import BrandElement from "./BrandElement.jsx";
import Row from "../Utility/Row.jsx";
import Loading from "../Utility/Loading.jsx";

const BrandContaier = ({ data, loading }) => {
  return (
    <Container>
      <Row>
        {loading === false ? (
          data ? (
            data.map(({ name, image, id }) => {
              return <BrandElement img={image} key={id} />;
            })
          ) : (
            <h4>لا يوجد ماركات</h4>
          )
        ) : (
          <Loading />
        )}
      </Row>
    </Container>
  );
};

export default BrandContaier;
