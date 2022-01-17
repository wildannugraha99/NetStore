import React, { useState } from "react";
import "./Product.scss";
import star from "../../Assets/icons/star.svg";
import {useHistory } from "react-router-dom";

export default function Product({ loading, data }) {
  let history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(loading);
  }, 2000);

  return (
    <div className="card_container">
      {data.map((item) => (
        <div
          className={isLoading ? "card_product-loading" : "card_product"}
          key={item.id}
          onClick={() => {
            history.push({
              pathname: "/Detail",
              search: `?productId=${item.id}`,
              state: {
                id: item.id,
                name: item.title,
                price: item.price,
                category: item.category,
                rate: item.rating.rate,
                sold: item.rating.count,
                image: item.image,
                desc: item.description,
              },
            });
          }}
        >
          <div className="image_ratio">
            <img src={item.image} alt="" className="product_image" />
          </div>
          <div className="product_name">{item.title}</div>
          <div className="product_price">$ {item.price}</div>
          <div className="product_category">{item.category}</div>
          <div className="product_wrapper">
            <img src={star} alt="" className="star_icon" />
            <div className="product_rating">{item.rating.rate}</div>
            <div>|</div>
            <div className="product_sold">Sold {item.rating.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
