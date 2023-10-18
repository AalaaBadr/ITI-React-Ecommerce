import { useState } from "react";
import { useDispatch} from "react-redux";
import { addProduct } from "../../store/slices/CartProducts";
import { RatingStar } from "rating-star";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function Product({ product }) {
    const dispatch = useDispatch();
    const [num, setnum] = useState(1);

    const newPrice = product.price - (product.price * (product.discountPercentage / 100)).toFixed(1);
    return (
        <div className="container row row-cols-md-2">
            <div className="col">
                <div className="row" >
                    <img src={product.thumbnail} style={{ width: '30rem', height: '30rem' }} />
                </div>
                <div className="row row-cols-4" style={{ width: '30rem' }}>
                    {product.images.map((image) => {
                        return (
                            <div key={image} className="col mt-3">
                                <img src={image} style={{ width: '6rem', height: '6rem' }} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="col">
                <Card className='container' style={{ width: '30rem', border: "none" }}>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <RatingStar id='product' rating={product.rating} colors={{ mask: "green" }} noBorder />
                        <hr />
                        {product.discountPercentage ? (
                            <><Card.Title>{newPrice}$</Card.Title>
                                <Card.Text>
                                    Was <span style={{ textDecoration: "line-through" }}>{product.price}$</span>
                                    ,<span style={{ color: "orange", fontSize: "large" }}> {product.discountPercentage}% discount </span>
                                </Card.Text> </>
                        ) : (
                            <Card.Title>{product.price}$</Card.Title>
                        )}
                        <hr />
                        {product.stock ? (
                            <span className="badge rounded-pill text-bg-success">In stock</span>
                        ) : (
                            <span className="badge rounded-pill text-bg-danger">Out of stock</span>
                        )}
                        <Card.Text className="mt-3">More information</Card.Text>
                        <span className="badge rounded-pill text-bg-light px-4 py-3 me-3">{product.category}</span>
                        <span className="badge rounded-pill text-bg-light px-4 py-3">{product.brand}</span>
                        <hr />
                        <div className='row ms-1 mb-3'>
                        <div className="col-auto fs-4 rounded-pill fw-light text-bg-light px-0">
                            <Button className="px-3 rounded-pill" variant="light" 
                            onClick={()=>{ if (num!=1){
                                setnum(num-1)}
                                }}>-</Button>
                            <span className="px-3">{num}</span>
                            <Button className="px-3 rounded-pill" variant="light"
                            onClick={()=>{if (num!=product.stock){
                                setnum(num+1)}}
                            }>+</Button>
                        </div>
                        <Card.Text className="col mt-2">Only <span style={{ color: "orange" }}>{product.stock} item</span> left !</Card.Text>
                        </div>
                        <Button className={product.stock ? "rounded-pill px-5 me-3" : "rounded-pill disabled px-5 me-3"} 
                        variant={product.stock ? "success" : "light"}>
                            Buy Now
                        </Button>
                        <Button className={product.stock ? "rounded-pill px-5" : "rounded-pill disabled px-5"} 
                        variant={product.stock ? "outline-success" : "outline-light"}
                        onClick={()=>dispatch(addProduct([product.id, num, (product.price - (product.price * (product.discountPercentage / 100)).toFixed(1))]))}>
                            Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
