import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const usersComponents = users.map((e) => (
    <div key={e} style={{ border: "1px black solid" }}>
      {e}
    </div>
  ));
  return (
    <div style={{ marginTop: 200 }}>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      <div style={{ marginTop: 40 }}>{usersComponents}</div>
    </div>
  );
};

export default Users;
