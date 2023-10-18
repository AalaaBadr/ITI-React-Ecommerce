import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { RatingStar } from "rating-star";
import { useDispatch } from "react-redux"
import { addProduct } from "../../store/slices/CartProducts";

export default function ProductCard({product}) {
  const newPrice = product.price - (product.price * (product.discountPercentage / 100)).toFixed(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToDetails = (id) => {
    navigate(`/Product-details/${id}`)
  }

  return (
    <Card style={{ width: '20rem',border: "none" }} className="postion-relative">
    <Card.Body>
      <div onClick={() => redirectToDetails(product.id)}>
    {product.stock ? (
          <span className="badge rounded-pill text-bg-success position-absolute m-2">In stock</span>
        ) : (
          <span className="badge rounded-pill text-bg-danger position-absolute m-2">Out of stock</span>
        )}
      <Card.Img variant="top" src={product.thumbnail} style={{ width: '17.9rem', height: '17.9rem' }}/>
      <div className="row justify-content-between mt-2">
      <Card.Title className="col col-md-8 text-truncate">{product.title}</Card.Title>
      <Card.Title className="col-md-auto">{newPrice}$</Card.Title>
      </div>
      <Card.Text className="text-truncate mb-0">
        {product.description}
      </Card.Text>
     <div><RatingStar id='productCard' rating={product.rating} colors={{ mask: "green" }} noBorder/></div>
     </div>
      <Button className={product.stock ? "rounded-pill" : "rounded-pill disabled"} 
      variant={product.stock ? "success" : "light"}
      onClick={()=>dispatch(addProduct([product.id, 1, (product.price - (product.price * (product.discountPercentage / 100)).toFixed(1))]))}>
      Add to cart</Button>
    </Card.Body>
  </Card>
  )
}