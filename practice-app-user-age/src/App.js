import { useState } from "react";
import NewUser from "./NewUser/NewUser";
import Users from "./User/Users";

export const App = () => {

  const DUMMY_USERS_DATA = [
    { id: "u1", name: "Michale", age: 28 },
    { id: "u2", name: "Hell", age: 30 },
  ];

  const [users, setUsers] = useState(DUMMY_USERS_DATA);

  const addNewUserHandler = (newUser) => {

    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });

  }

  return (
    <div className="App">
      <NewUser onAddNewUser={addNewUserHandler} />
      <Users users={users}></Users>
    </div>
  );
};

export default App;
