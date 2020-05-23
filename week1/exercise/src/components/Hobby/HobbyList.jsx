import React from 'react';
import Hobby from './Hobby';

const HobbyList=()=> {
  const hobbies = ['Making T-Shirts', 'Reviewing Things', 'Social Media', 'Creating And/Or Editing Videos','Computer Technician'];

  return (
    <ul>
      {hobbies.map(hobby => (
        <Hobby hobby={hobby} />
      ))}
    </ul>
  );
}

export default HobbyList;