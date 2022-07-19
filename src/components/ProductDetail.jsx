import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import {
  ButtonStyled,
  Header4,
  Header1,
  Para,
  Header3,
  Details,
  DetailsStyled,
  Loader,
} from "./ReusableStyles";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setLoading(false);
    };
    getProduct(id);
  }, []);

  const Loading = () => {
    return (
      <>
        <Loader>
          <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="gray"
            secondaryColor="#eee"
          />
        </Loader>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <Details>
          <div className="col-md-5 px-5 mt-5 text-center">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-5">
            <Header4>{product.category}</Header4>
            <Header1>{product.title}</Header1>
            <Para>
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </Para>
            <Header3>$ {product.price}</Header3>
            <Para className="desc"> {product.description}</Para>
            <ButtonStyled> Add To Cart</ButtonStyled>
          </div>
        </Details>
      </>
    );
  };
  return (
    <DetailsStyled>
      <div className="detail-con">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </DetailsStyled>
  );
};

export default ProductDetail;
