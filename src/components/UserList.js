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
    <div>UserList</div>
  )
}

export default UserList