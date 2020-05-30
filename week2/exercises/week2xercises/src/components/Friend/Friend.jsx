//jshint esversion: 6 
//jshint esversion:8

import React, { useState } from 'react';

import FriendProfile from './FriendProfile/FriendProfile';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner'

const Friend=() =>{

  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [friend, setFriend] = useState({});

  const getFriend = async () => {

    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      if (response.ok) {
        const data = await response.json();
        
        setFriend({
            firstName: data.results[0].name.first,
            lastName: data.results[0].name.last,
            address: data.results[0].location.street.name,
            country: data.results[0].location.country,
            email: data.results[0].email,
            phone: data.results[0].cell,
          });

      } else {
        throw Error('Something went wrong while fetching!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h1>Exercise 1 - Get Random Friend</h1>
      <Button onClick={getFriend} title="friend" />
      {isLoading && <Spinner/>} 
      {hasError && <p> Something went wrong!!! </p>}
      {!isLoading && !hasError && <FriendProfile 
      firstName={friend.firstName} 
      lastName={friend.lastName} 
      address={friend.address} 
      country={friend.country} 
      email={friend.email} 
      phone={friend.phone}/>}
      
    </div>
  );
}

export default Friend;