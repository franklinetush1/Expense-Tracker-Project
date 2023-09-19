import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from '../Data/globalContext';

const COLORS = ['#ffaaa5', ' #4C83FF', '#2AFADF', '#FF8042', '#66bfbf'];

const PieChartDisp = () => {
  const [categoryData, setCategoryData] = useState([]);
  const { expenses } = useGlobalContext();

  useEffect(() => {
    // Aggregate the expenses by category and calculate total amount
    const categoryTotals = {};
    expenses.forEach((expense) => {
      const { category, amount } = expense;
      if (category in categoryTotals) {
        categoryTotals[category] += amount;
      } else {
        categoryTotals[category] = amount;
      }
    });

    // Transform the aggregated data into processed data format
    const processedData = Object.keys(categoryTotals).map((category) => ({
      name: category,
      value: categoryTotals[category],
    }));

    setCategoryData(processedData);
  }, [expenses]); // Run this effect whenever expenses change

  return (
    <div className="PieChartDisp">
      <h5 className='pieTitle'>Expenses by category</h5>
      <PieChart width={800} height={300}>
      <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
        />
        <Pie
          dataKey="value"
          data={categoryData}
          cx={140}
          cy={90}
          outerRadius={90}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
          ))}
        </Pie>
        
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartDisp;
