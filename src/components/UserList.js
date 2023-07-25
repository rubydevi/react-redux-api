import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList