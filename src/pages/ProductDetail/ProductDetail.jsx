import React, { useState,useEffect,useContext} from "react";
import "./ProductDetail.scss";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useLocation,useHistory } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import Loading from "../../Components/Loading/Loading";
import Comment from "../../Components/Comment/Comment";
import star from "../../Assets/icons/star.svg";
import pluss from "../../Assets/icons/plus.svg";
import minus from "../../Assets/icons/minus.svg";
import back from "../../Assets/icons/back.svg";
import addcart from "../../Assets/icons/addcart.svg"
import buy from "../../Assets/icons/buy.svg"
import Accordion from "../../Components/Accordion/Accordion";
import Footer from "../../Components/Footer/Footer";
import ModalCart from "../../Components/ModalCart/ModalCart";


export default function ProductDetail() {
  const location = useLocation();
  const history = useHistory(); 
  const [value, setValue] = useState(1);
  const [isLoading, setIsLoading] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModal, setIsModal] = useState(false);
  
  const {
    name: Name,
    category: Category,
    rate: Rate,
    sold: Sold,
    price: Price,
    desc: Desc,
    image: Img,
  } = location.state;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  window.addEventListener("scroll", handleScroll);

  function plus() {
    setValue(value + 1);
  }

  function min() {
    if (value === 1) {
      setValue(1);
    } else {
      setValue(value - 1);
    }
  }

  function loading(load) {
    setIsLoading(load)
  }

  function modalShow() {
    setIsModal(true)
  }

  function modalClose(value) {
    setIsModal(value)
  }

  function buyNow() {
    Swal.fire({
     
      text: "Are you sure, You want buy this item.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Buy it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          {
            title: "item purchase success.",
            icon: 'success',
          }
        )
      }
    })
  }

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <div>
      <NavbarComponent scrollPositionDetail={scrollPosition} />
      { isLoading ? (
        <div><Loading/></div>
      ) : (

       <div>
          <div className="product_container">
            <div className="breadcrumb_wrapper">
              <Breadcrumb />
            </div>

            <button className="Back" onClick={history.goBack}>
              <img src={back} alt="" />
            </button>

            <div className="container-wrapper">
              <div className="product_image-ratio">
                <img src={Img} alt="" />
              </div>

              <div className="product_desc-container">
                <div className="product_name-detail">{Name}</div>
                <div className="product_category-detail">{Category}</div>
                <div className="detail_wrapper">
                  <img src={star} alt="" />
                  <div className="product_rate-detail">{Rate}</div>
                  <div>|</div>
                  <div className="product_sold-detail">Sold {Sold}</div>
                </div>
                <div className="product_price-detail">$ {Price}</div>

                <div className="product_order">
                  <div className="order_title">Quantity:</div>
                  <div>
                    <button onClick={plus}>
                      <img src={pluss} alt="" />
                    </button>
                    <input type="number" name="" id="" value={value} />
                    <button onClick={min}>
                      <img src={minus} alt="" />
                    </button>
                  </div>
                </div>

                <Accordion>
                  <div className="product_desc-detail">{Desc}.</div>
                </Accordion>

                <div className="button_wrapper">
                  <button className="add_cart" onClick={modalShow}>
                    <img src={addcart} alt="" />
                    Add to cart
                  </button>
                  <button className="buy_now" onClick={buyNow}>
                  <img src={buy} alt="" />
                    Buy now
                  </button>
                </div>
              </div>
            </div>
            <Comment loading={loading}/>
            
            <div className={isModal ? "modal_show" : "modal_hide"}>
              <ModalCart quantity={value} modalClose={modalClose}/>
            </div>

          </div>
          <Footer/>
       </div>
       
      )}

     
    </div>
  );
}


