import axios from 'axios';
import React from 'react';

const UsersList = ({UserList, selectUser, getUsers}) => {
  const userListOrd = UserList.sort((a, b) => a.email.localeCompare(b.email))

  const deleteUser = (user) => {
    axios.delete(`https://users-crud.academlo.tech/users/${user.id}/` )
    .then(() => getUsers() )
}

  return (
  
      <div className='user-list'>
    <div className='container'>
      <h1>Users  <i className="fa-solid fa-users"></i></h1>
      {
            userListOrd.map(user =>(
              <div className='users-container' key={user.id}>

                <ul>
                  <li><b>First Name : </b>{user.first_name}  </li>
                  <li><b>Last Name : </b>{user.last_name}  </li>
                  <li><b>Email : </b> {user.email}  </li>
                  <li><b>Password : </b>{user.password}  </li>
                  <li><b>Birthday : </b>{user.birthday}  </li>
                </ul>

                <div className="btn-user">
                <button className='btn green' onClick={() => selectUser(user)}>
                <i className="fa-solid fa-user-pen"></i>
                  </button>
                <button className='btn red' onClick={() => deleteUser(user)}>
                <i className="fa-solid fa-trash"></i>
                  </button>
                  
                </div>
                
              </div>
            ))
      }
    </div>
    </div>
  );
};
export default UsersList;