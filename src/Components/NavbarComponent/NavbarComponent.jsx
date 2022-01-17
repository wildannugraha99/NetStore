import React,{useContext} from "react";
import { filterContext } from "../FilterContext/FilterContext";
import {useHistory} from "react-router-dom";
import "./NavbarComponent.scss";
import cart from "../../Assets/icons/cart.svg";
import user from "../../Assets/icons/user.svg";
import cartNavbar from "../../Assets/icons/cart-navbar.svg";
import filter from "../../Assets/icons/filter.svg";

export default function NavbarComponent({scrollPosition,scrollPositionDetail}) {
  const history = useHistory();
  
  const {setFilterShow} = useContext(filterContext)
  const {setModalList} = useContext(filterContext)
  const {addcart} = useContext(filterContext) 


  function showFilter() {
    setFilterShow(true)
  }

  function pushUser() {
    history.push({
      pathname:"/User"
    })
  }

  function pushCart() {
    setModalList(true)
  }

  return (
    <div className={scrollPosition || scrollPositionDetail >= 45 ? "navbarComponent-scroll" : "navbarComponent"}>
     <div className="navbar_container">
     <div className="navbar_logo">
        <img src={cart} alt="" />
        <div><i>Netstore</i></div>
      </div>

      <div className="navbar_icon">
        <button className="user_icon" onClick={pushUser} title="User info">
          <img src={user} alt="" />
        </button>
        <button className="cart_icon" onClick={pushCart} title="My cart">
          <div className={ addcart > 0 ? "notif_show" : "notif_hide"} 
            style={{backgroundColor: scrollPosition || scrollPositionDetail >= 45 ? "white" : "#00BFA6",
                    color : scrollPosition || scrollPositionDetail >= 45 ? "#00BFA6" : "white"}}>
              {addcart}
          </div>
          <img src={cartNavbar} alt="" />
        </button>
        <button className="filter_icon" onClick={showFilter} title="Filter products">
          <img src={filter} alt=""/>
        </button>
      </div>
     </div>
    </div>
  );
}
