import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../apis/config";
import Spinner from 'react-bootstrap/Spinner';
import Product from "../components/Products/Product";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => { setProduct(res.data); })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!product &&
        <div className="d-flex justify-content-center align-items-center" style={{ height: '40rem' }}>
          <Spinner animation="border" variant="success" style={{ width: '4rem', height: '4rem' }} />
        </div>}
      {product && <Product key={product.id} product={product} />}
    </>
  )
}