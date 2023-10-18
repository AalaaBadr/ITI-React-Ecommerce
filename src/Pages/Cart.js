import Table from 'react-bootstrap/Table';
import CartCard from '../components/CartCard/CartCard';
import { useSelector } from "react-redux"

export default function Cart() {
  const products = useSelector(state => state.CartProducts.products)
  
  const totalPrice = products.reduce((total, item)=> {
    console.log(item.num);
    console.log(item.price);
    total+= item.price * item.num;
    console.log(total);
    return total;
  },0)

  return (
    <>
      <h2 className='mb-5'>Cart</h2>
      {products.length==0 && 
      <div className="d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
        <div className='alert alert-danger'>Empty cart, Add products to show</div>
      </div>}
      {products.length > 0  && 
      <Table>
        <tbody>
          <tr className='text-center'>
            <td colSpan={2}>Description</td>
            <td>Quantity</td>
            <td>Remove</td>
            <td>Price</td>
          </tr>
          {products.map((product) => {
          return (
              <CartCard key={product.id} currentProduct={product}/>
          );
        })}
        <tr>
        <td colSpan={4}></td>
        <td className='d-flex justify-content-center align-items-center fs-4'>Total Price: {totalPrice}$</td>
        </tr>
        </tbody>
      </Table>
}
    </>
  )
}
