const UserDetail = (props) => {
  return (
    <div>
      <h2>
        User: {props.name} - Age: {props.age}
      </h2>
    </div>
  );
};

export default UserDetail;
