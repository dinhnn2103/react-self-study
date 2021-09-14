import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const UserForm = (props) => {
  
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    let newUserObj = {
      id: uuidv4(),
      name: userInput.name,
      age: userInput.age
    }

    props.onSaveNewUserData(newUserObj);
  };

  const nameInputHandler = (event) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        name: event.target.value,
      };
    });
  };

  const ageInputHandler = (event) => {
    let { value, min, max } = event.target;

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        age: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={userInput.name}
            onChange={nameInputHandler}
          ></input>
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={userInput.age}
            onChange={ageInputHandler}
            min={1}
            max={150}
          ></input>
        </div>
        <div style={{ padding: 10 }} />
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add user</button>
      </form>
    </div>
  );
};

export default UserForm;
