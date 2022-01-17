import React,{useState,useEffect,useContext} from 'react'
import { filterContext } from "../FilterContext/FilterContext";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import './ModalListCart.scss'
import empty from "../../Assets/illustration/undraw_empty_re_opql.svg"
import cart from "../../Assets/icons/cart-navbar.svg"

export default function ModalListCart() {
  const {setModalList} = useContext(filterContext)
  const {dataProductCart} = useContext(filterContext)
  const {setAddcart} = useContext(filterContext)
  const [dataProduct, setDataProduct] = useState([]);
 
  function closeModalList() {
    setModalList(false)
  }

  useEffect(() => {
    if(dataProductCart !== null){
      const arr = []
      arr.push(dataProductCart)
      setDataProduct([...dataProduct, ...arr])
      setAddcart(dataProduct.length + 1)
    }
     
  }, [dataProductCart])

  function deleteList(e) {
    const newData = [...dataProduct];
    newData.splice(e.target.value,1);
    setDataProduct(newData);
    setAddcart(dataProduct.length - 1)
  }

  function buyList() {
    if(dataProduct.length < 1){
      Swal.fire({
        icon: 'question',
        text: 'Please add items to cart first!',
      })
     
    }else{
      Swal.fire({
        icon: 'success',
        text: 'Your purchase was successful',
      })
      
    }
  }

  return (
    <div className='modallist_bg'>
      <div className="modalist_box">
        <div className='modal_title'>
          <img src={cart} alt="" />
          My Cart
        </div>

        {dataProduct.length < 1 ? (
          <div className='cart_empty'>
            <img src={empty} alt="" />
            <div>My Cart is empty</div>
          </div>

        ) : (
          <div className='listWrapper'>
            {dataProduct.map((item,idx) => (
              <div className="listCart" key={idx}>
                <input type="checkbox" name="listCheck" id={idx} />
                <div className="listBox"></div>
                <label htmlFor={idx}>
                  <div className='listImage'>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='listDesc'>
                    <div className='listName'>{item.name}</div>
                    <div className='listQuantity'>Quantity: <b>{item.quantityProp}</b></div>
                    <div className='listTotalPrice'>Total: $ <b>{item.totPrice}</b></div>
                  </div>
                </label>
                <button onClick={deleteList} className='listRemove' value={idx}>Remove</button>
              </div>
            ))}
              
            </div>
        )}
                     
         <div className='listButton'>
            <button onClick={buyList}>Buy now</button>
            <button onClick={closeModalList}>cancel</button>
         </div>
      </div>
    </div>
  )
}
