import { userDataURL } from '../constant';
import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [user, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        fetchData();
    }, 2000);
   
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(userDataURL);
      if (!resp.ok) {
        console.log('respone is not okay');
        throw new Error('Failed to fetch news');
      }

      const data = await resp.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false); // Set loading to false after the request finishes
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
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
            <tr>
              <td><strong>Address</strong></td>
              
            </tr>
            <tr>
              <td><strong>Geo Location</strong></td>
              
            </tr>
            <tr>
              <td><strong>Company</strong></td>
             
            </tr>
            <tr>
              <td><strong>CatchPhrase</strong></td>
            
            </tr>
            <tr>
              <td><strong>Business</strong></td>
            
            </tr>
          </tbody>
          </table>
      )}
    </div>
  );
};

export default NewsFeed;
