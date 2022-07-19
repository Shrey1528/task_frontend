import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ProductsStyled, Card, LoaderProducts } from "./ReusableStyles";
import { Oval } from "react-loader-spinner";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    if (componentMounted) {
      setData(response.data);
      setLoading(false);
      setFilter(response.data);
      console.log(response.data);
    }
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    getData();
  }, []);

  const Loading = () => {
    return (
      <>
        <LoaderProducts>
          <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="gray"
            secondaryColor="#eee"
          />
        </LoaderProducts>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 m-3 mt-4">
                <Card className="card h-100 text-center p-5" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt="Image"
                    height="300px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 11)}....
                    </h5>
                    <p class="card-price">$ {product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn-view"
                    >
                      View
                    </NavLink>
                  </div>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <ProductsStyled>
      <div className="container-prod">
        <div className="row">
          <h2>Products</h2>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </ProductsStyled>
  );
};

export default Products;
