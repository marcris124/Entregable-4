import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Users = () => {

  const [users, setusers] = useState ([])

  useEffect(() => {
    axios.get("https://users-crud.academlo.tech/users/")
    .then(res => setusers(res.data))

  },[] )

  console.log(users);

  return (
    <div>
      
    </div>
  );
};

export default Users;