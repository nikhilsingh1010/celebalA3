import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from "../context/ThemeContext";

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 200 },
  { name: 'Apr', users: 278 },
];

const Charts = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`charts-wrapper ${dark ? 'dark' : ''}`}>
      <h2 className="charts-title">📊 User Analytics</h2>
      <div className="charts-card">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke={dark ? "#ccc" : "#333"} />
            <YAxis stroke={dark ? "#ccc" : "#333"} />
            <Tooltip 
              contentStyle={{
                backgroundColor: dark ? "#444" : "#fff",
                border: dark ? "1px solid #666" : "1px solid #ddd",
                color: dark ? "#fff" : "#000"
              }} 
            />
            <Bar dataKey="users" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
