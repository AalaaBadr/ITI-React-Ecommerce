import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/slices/CartProducts"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CloseButton from 'react-bootstrap/CloseButton';

export default function CartCard({ currentProduct }) {
    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [num, setnum] = useState(currentProduct.num);

    useEffect(() => {
        axiosInstance
            .get(`/products/${currentProduct.id}`)
            .then((res) => { setProduct(res.data) })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {product &&
                <tr>
                    <td colSpan={2}>
                        <div className="d-flex align-items-center" style={{ height: '9rem' }}>
                            <img src={product.thumbnail} style={{ width: '8rem', height: '8em' }} />
                            <Card.Title className="m-4">{product.title}</Card.Title>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '9rem' }}>
                            <div className="text-center fs-4 rounded-pill fw-light text-bg-light px-0">
                                <Button className="px-3 rounded-pill" variant="light"
                                    onClick={() => {
                                        if (num !== 1) {
                                            setnum(num - 1)
                                        }
                                    }}>
                                -</Button>
                                <span className="px-3">{num}</span>
                                <Button className="px-3 rounded-pill" variant="light"
                                    onClick={() => {
                                        if (num !== product.stock) {
                                            setnum(num + 1)
                                        }
                                    }}>
                                +</Button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '9rem' }}>
                            <CloseButton className="border p-2"
                                onClick={() => dispatch(removeProduct(currentProduct.id))} />
                        </div>
                    </td>
                    <td>
                        <p className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
                            {product.price - (product.price * (product.discountPercentage / 100)).toFixed(1)}$
                        </p>
                    </td>
                </tr>
            }
        </>
    )
}