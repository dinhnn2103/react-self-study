import UserDetail from "./UserDetail";

const UsersList = (props) => {
  return (
    <div>
      {props.users.map((u) => 
        <UserDetail
          key={u.id}
          id={u.id}
          name={u.name}
          age={u.age}
        />
      )}
    </div>
  );
}

export default UsersList;