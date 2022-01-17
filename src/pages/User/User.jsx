import React from "react";
import { useHistory } from "react-router-dom";
import "./User.scss";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import john from "../../Assets/illustration/john.jpg";
import pencil from "../../Assets/icons/pencil.svg";
import back from "../../Assets/icons/back.svg"

export default function User({ dataUser }) {

  const history = useHistory();
  const { firstname: Firstname, lastname: Lastname } = dataUser.name;
  const {
    city: City,
    number: Number,
    street: Street,
    zipcode: Zipcode,
  } = dataUser.address;

  function logout() {
    Swal.fire({
      titleText: "Are you sure, want logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#00BFA6',
      confirmButtonText: 'Yes, i want logout'
    }).then((result) => {
      if (result.isConfirmed) {
        history.push({
          pathname: "/",
        });
        window.location.reload()
      }
    })

 
  }

  return (
    <div className="user">
      <div className="user_container">
        <div className="image_wrapper">
          <button className="back" onClick={history.goBack} title="Back">
            <img src={back} alt=""/>
          </button>
          <img src={john} alt="" className="profile"/>
          <div className="username">Username: {dataUser.username}</div>
        </div>

        <div className="edit" title="Edit Profile">
          <img src={pencil} alt="" />
        </div>

        <div className="profile">
          <fieldset>
            <legend>Name</legend>
            <div className="name">
              {Firstname} {Lastname}
            </div>
          </fieldset>

          <fieldset>
            <legend>Phone Number</legend>
            <div className="phone">{dataUser.phone}</div>
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <div className="email">{dataUser.email}</div>
          </fieldset>

          <fieldset>
            <legend>Address</legend>
            <div className="email">
              {Street} Street no.{Number} ,{City} {Zipcode}
            </div>
          </fieldset>
        </div>

        <div className="logot-wrapper">
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
 
  );
}
