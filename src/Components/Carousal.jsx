import React, { Component } from "react";
import Slider from "react-slick";
import labtop from "../images/labtop.png";

export default class Car extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplaySpeed: 2000,
      rtl: true,
    };
    return (
      <div>
        <Slider className="" {...settings}>
          <div>
            <img src={labtop} alt="abstract01" />
          </div>
          <div>
            <img src={labtop} alt="abstract02" />
          </div>
          <div>
            <img src={labtop} alt="abstract03" />
          </div>
          <div>
            <img src={labtop} alt="abstract04" />
          </div>
        </Slider>
      </div>
    );
  }
}
