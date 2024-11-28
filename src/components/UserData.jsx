import { userDataURL } from '../constant';
import useFetchDataURL  from './UseFetchDataURL';
import React, { useEffect,useState } from 'react';

const NewsFeed = () => {
  const [user, setUsers] = useState([]);
 
  const { data, loading } = useFetchDataURL('https://jsonplaceholder.typicode.com/users');
  // Use useEffect to avoid infinite loop
  useEffect(() => {
    if (data.length > 0) {
      setUsers(data[0]); // Set only the first user or update logic as needed
    }
  }, [data]);
  console.log('data',user);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td><strong>Username</strong></td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td><strong>Phone</strong></td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td><strong>Website</strong></td>
              <td>{user.website}</td>
            </tr>
            
            
          </tbody>
          </table>
      )}
    </div>
  );
};

export default NewsFeed;
