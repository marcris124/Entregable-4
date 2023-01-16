import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'
import UsersList from './assets/Components/UsersList'
import UsersForm from './assets/Components/UsersForm'

function App() {



  const [UserList, setuserList] = useState([])

  const [userSelected, setuserSelected] = useState (null)

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setuserList(res.data))
  },[])
console.log("soy un console.log" + UserList);
  const getUsers = () =>{

    axios.get("https://users-crud.academlo.tech/users/")
    .then(res => setuserList(res.data))

  }

  const selectUser = (user) => {
    setuserSelected(user)
  }

  


  return (
    <div className="App">
    
    <UsersForm
    getUsers={getUsers}
    userSelected={userSelected}
    selectUser={selectUser}
    />
    
    <UsersList
    UserList={UserList}
    selectUser={selectUser}
    getUsers={getUsers}
    />


    </div>
  )
}

export default App
