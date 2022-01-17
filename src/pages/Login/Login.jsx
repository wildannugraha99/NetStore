import React, { useState, useEffect } from "react";
import "./Login.scss";
import "sweetalert2/src/sweetalert2.scss";
import image from "../../Assets/illustration/undraw_shopping_app_flsj.svg";
import help from "../../Assets/icons/Help.svg";
import web from "../../Assets/icons/web.svg";
import linked from "../../Assets/icons/linked.svg";
import email from "../../Assets/icons/email.svg";
import cart from "../../Assets/icons/cart.svg";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Swal from "sweetalert2";

export default function Login({ token }) {

  const [dataUsername, setDataUsername] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  
  function dataFromChild(username, password) {
    setDataUsername(username);
    setDataPassword(password);
  }

  async function requestLogin() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    const requestLogin = await fetch("https://fakestoreapi.com/auth/login", {
      method:"POST",
      headers: headers,
      body: JSON.stringify({
        username: dataUsername,
        password: dataPassword,
      }),
    })
      const requestLoginJson = await requestLogin.json()
        token(requestLoginJson.token);
        if (requestLoginJson.token === undefined) {
          Swal.fire({
            position: "top",
            icon: "error",
            titleText: "Wrong Username or Password",
            showConfirmButton: false,
            timer: 5000,
            toast: true,
          });
        } else {
          Swal.fire({
            position: "top",
            icon: "success",
            titleText: "Login success",
            showConfirmButton: false,
            timer: 1500,
            toast: true,
          });
        }
  }

  useEffect(() => {
    requestLogin();
  }, [dataUsername, dataPassword]);

  function show() {
      Swal.fire({
        title: "Please copy the username and password.",
        html: "Username: <b>johnd</b> <br/> Password: <b>m38rmF$</b>",
        color: "#00BFA6",
      }) 
  }

  return (
    <div>
      <div className="login_container">
        <div className="logo">
          <img src={cart} alt="" className="cart_icon" />
          <i>Netstore</i>
        </div>

        <button
          className="help_icon"
          title="See Username & Password"
          onClick={show}
        >
          <img src={help} alt="" className="help" />
        </button>

        <div className="login_image">
          <img src={image} alt="" className="thumbnail" />
        </div>
        <div className="login_form-container">
          <LoginForm reqData={dataFromChild} />

          <div className="contact_icon-container">
            <a
              href="###"
              className="contact_icon"
              title="Visit our website"
            >
              <img src={web} alt="" className="contact" />
            </a>
            <a href="###" className="contact_icon" title="Visit our Linkedin">
              <img src={linked} alt="" className="contact" />
            </a>
            <a href="###" className="contact_icon" title="Send us email">
              <img src={email} alt="" className="contact" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
