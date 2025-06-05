import React from 'react';

const users = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
];

const Table = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">User Table</h2>
    <table className="min-w-full bg-white shadow rounded">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="py-2">{user.name}</td>
            <td className="py-2">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
