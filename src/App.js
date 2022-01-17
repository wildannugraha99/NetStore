import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import "./style/App.scss";
import { filterContext } from "./Components/FilterContext/FilterContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import User from "./pages/User/User";
import ModalListCart from "./Components/ModalListCart/ModalListCart";

export default function App() {
  const [isLogin, setIsLogin] = useState("");
  const [filterShow, setFilterShow] = useState(false);
  const [notif, setNotif] = useState(false);
  const [modalList, setModalList] = useState(false);
  const [addcart, setAddcart] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [dataProductCart, setDataProductCart] = useState(null);



  function dataFromChild(token) {
    setIsLogin(token);
  }

  async function requestData() {
    const user = await fetch("https://fakestoreapi.com/users/1");
    const userJson = await user.json();
    setDataUser(userJson);
  }

  useEffect(() => {
    requestData();
    return () => {};
  }, []);

  return (
    <div>
      {isLogin ? (
        <BrowserRouter>
          <Switch>
            <div>
              <filterContext.Provider
                value={{
                  filterShow,
                  setFilterShow,
                  notif,
                  setNotif,
                  addcart,
                  setAddcart,
                  modalList,
                  setModalList,
                  dataProductCart,
                  setDataProductCart,
                }}
              >
                <Route exact path="/Product">
                  <Homepage />
                </Route>

                <Route path="/Detail">
                  <ProductDetail />
                </Route>

                <Route path="/User">
                  <User dataUser={dataUser} />
                </Route>

                <div
                  className={
                    modalList ? "isModalList-show" : "isModalList-hide"
                  }
                >
                  <ModalListCart />
                </div>
              </filterContext.Provider>
            </div>
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/" children={<Login token={dataFromChild} />} />
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}
