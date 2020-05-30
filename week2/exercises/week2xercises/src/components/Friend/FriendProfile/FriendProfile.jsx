//jshint esversion: 6 
//jshint esversion:8

import React from "react";

 const FriendProfile=(props) =>{

  const {firstName, lastName, address, country, email, phone} =props;
  return (
    <ul className="friendProfile">
      <li>
        Name:{firstName} {lastName}
      </li>
      <li>Address: {address} </li>
      <li>Country: {country}</li>
      <li>Email: {email}</li>
      <li>Phone: {phone}</li>
    </ul>
  );
}

export default FriendProfile;