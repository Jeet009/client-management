import React, { useState, useEffect } from "react";

export default function DataComponent() {
  const [users, setUser] = useState([]);

  //Fetching The Data - Using useEffect Hooks
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [setUser]);
  return (
    <div>
      <table className='table table-light table-borderless'>
        <thead className='thead-font'>
          <tr>
            <th scope='col'>Client</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>City</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Website</th>
          </tr>
        </thead>
        <tbody className='tbody-font'>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope='row'>
                <img
                  className='rounded'
                  width='50'
                  height='50'
                  src='https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg'
                />
              </th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
