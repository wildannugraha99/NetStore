import React,{useContext} from 'react'
import "./ModalCart.scss"
import { filterContext } from "../FilterContext/FilterContext";
import { useLocation} from "react-router-dom";
import Accordion from '../Accordion/Accordion';

export default function ModalCart({quantity,modalClose}) {
  
  const location = useLocation();
  const {setNotif} = useContext(filterContext)
  const {setDataProductCart} = useContext(filterContext)

  const {
    name: Name,
    desc: Desc,
    image: Img,
    price: Price,
  } = location.state;

  
  const totalPrice = Price * quantity

  function closeModal() {
    modalClose(false)
  }

  const obj = {
    name: Name,
    image: Img,
    quantityProp : quantity,
    totPrice: totalPrice,
  }

  function sendNotif() {
    setNotif(true)
    modalClose(false)
    setDataProductCart(obj)
  }

  

  
  return (
    <div className='modal_bg'>
      <div className="modal_box">
        <div className="title">Add to Cart</div>
        <div className='product_image'> <img src={Img} alt=""/></div>
        <div className='desc_flex'>
          <div className='product_name'>{Name}</div>
          <Accordion>
            <div className='product_desc'>{Desc}</div>
          </Accordion>
          
          <div className='border'>
            <div className='product_quantity'>
              Quantity: <b> {quantity}</b> pcs
            </div>
            <div>
              total price: $ <b>{totalPrice}</b>
            </div>
          </div>

          <div className='modal_btn'>
            <button onClick={sendNotif}>Add</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
