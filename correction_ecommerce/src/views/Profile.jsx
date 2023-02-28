import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../actions';

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ ...user });

  function saveUser(event) {
    event.preventDefault();

    dispatch(setUser(formData));
  }

  function handleChanges(event) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <h2>Hi {user.firstname}!</h2>
      <h3>Customize your profile here</h3>

      <form onSubmit={saveUser}>
        <p>
          Your firstname : <input type="text" defaultValue={user.firstname} onChange={handleChanges} name="firstname" />
        </p>
        <p>
          Your lastname : <input type="text" defaultValue={user.lastname} onChange={handleChanges} name="lastname" />
        </p>
        <p>
          Your email: <input type="email" defaultValue={user.email} onChange={handleChanges} name="email" />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
