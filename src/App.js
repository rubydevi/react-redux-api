import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/users/usersSlice'
import UserList from './components/UserList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Random Users</h1>
      <UserList />
    </div>
  );
}

export default App