import { useState } from "react";
import UserForm from "../UI/UserForm";

const NewUser = (props) => {

  const [isEditingForAddNewUser, setIsEditingForAddNewUser] = useState(false);

  const addNewUserHandler = () => {
    startEditingForAddUser();
  };

  const cancelEditingFormHandler = () => {
    stopEditingForAddUser();
  }

  const saveNewUserDataHandler = (enteredNewUser) => {

    props.onAddNewUser(enteredNewUser);
    stopEditingForAddUser();
  }

  const startEditingForAddUser = () => {
    setIsEditingForAddNewUser(true);
  };

  const stopEditingForAddUser = () => {
    setIsEditingForAddNewUser(false);
  }

  return (
    <div>
      {isEditingForAddNewUser && <UserForm onCancel={cancelEditingFormHandler} onSaveNewUserData={saveNewUserDataHandler} />}
      {!isEditingForAddNewUser && <button type="button" onClick={addNewUserHandler}>Add new user</button>}
    </div>
  );
};

export default NewUser;
