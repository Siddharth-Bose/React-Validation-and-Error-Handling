import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const[usersList,setUsersList]=useState([])
  const addUserHandler=(uName,uAge)=>{
    // console.log(uName,uAge);
    setUsersList((prevUsersList)=>
    {
      return [...prevUsersList,{name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return (
    <>
    <AddUser onAddUser={addUserHandler}/>
    {usersList.length>0&&<UsersList users={usersList}/>}
    </>
  );
}

export default App;
