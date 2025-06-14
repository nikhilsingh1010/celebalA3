import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

const users = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
];

const Table = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`table-wrapper ${dark ? 'dark' : ''}`}>
      <h2 className="table-title">👥 User Table</h2>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
