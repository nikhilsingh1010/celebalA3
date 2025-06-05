import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 200 },
  { name: 'Apr', users: 278 },
];

const Charts = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">User Analytics</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default Charts;
