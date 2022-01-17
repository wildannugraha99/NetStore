import React from "react";
import "./Footer.scss";
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'
import cart from "../../Assets/icons/cart.svg";
import google from "../../Assets/icons/google.png";
import ios from "../../Assets/icons/ios.png";
import ig from "../../Assets/icons/ig.svg";
import fb from "../../Assets/icons/fb.svg";
import twit from "../../Assets/icons/twit.svg";
import drib from "../../Assets/icons/drib.svg";
import link from "../../Assets/icons/link.svg";

export default function Footer() {

  function submitEmail(e) {
    e.preventDefault()
   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your email has submitted',
        showConfirmButton: false,
        timer: 1500
      })
  }


  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <div className="footer_logo-wrapper">
            <div className="footer_logo">
              <img src={cart} alt="" />
              <div>
                <i>Netstore</i>
              </div>
            </div>
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              iste perferendis voluptas, molestiae accusantium itaque architecto
              repellendus dolores quasi illo.
            </div>
          </div>

          <div className="footer_flex">
            <div className="about">
              <div className="title">Our Company</div>
              <ul>
                <li>
                  <a href="###">Lorem ipsum .</a>
                </li>
                <li>
                  <a href="###">Lorem dolor.</a>
                </li>
                <li>
                  <a href="###">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="###">Lorem sit.</a>
                </li>
              </ul>
            </div>

            <div className="download_app">
              <div className="title">Download our app</div>
              <div className="icon_wrapper">
                <img src={google} alt="" />
              </div>
              <div className="icon_wrapper">
                <img src={ios} alt="" />
              </div>
            </div>
          </div>

          <div className="subscribe">
            <div className="flex">
              <label htmlFor="email">Subscribe to get our lastest offers</label>
              <form onSubmit={submitEmail}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@ your email"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="socmed_icon">
              <div>Follow us on</div>
              <img src={ig} alt="" />
              <img src={fb} alt="" />
              <img src={twit} alt="" />
              <img src={drib} alt="" />
              <img src={link} alt="" />
            </div>

          </div>

          <div className="copyright">© 2022, Muhamad Wildan Nugraha</div>
        </div>
      </div>
    </div>
  );
}
