import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import ProductCard from "../components/Products/ProductCard";
import Spinner from 'react-bootstrap/Spinner';

export default function ProductsList() {
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    // ANOTHER WAY
    // getUsers()
    //   .then((res) => setUsersList(res.data.users))
    //   .catch((error) => console.log(error));
    axiosInstance
      .get("/products")
      .then((res) => setProductsList(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h5>Welcome to our shopping website, start browsing...</h5>
      <hr />
      {!productsList && 
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50rem' }}>
        <Spinner animation="border" variant="success" style={{ width: '4rem', height: '4rem' }}/>
      </div>}
      {productsList  && <div className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
        {productsList.map((product) => {
          return (
            <div key={product.id} className="col">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>}
    </>
  );
}