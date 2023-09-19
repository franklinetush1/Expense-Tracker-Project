import React, { useState } from "react";
import { useGlobalContext } from '../Data/globalContext';
import Chart from "react-apexcharts";
import { useEffect } from "react";


const ApexChartBar = () => {
  const { incomes, expenses } = useGlobalContext();
  

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        
      },
      xaxis: {
        categories: incomes.map((inc) =>{
            const {date} = inc
            return date
        })
      },

      stroke: {
        width: 5,
        curve: 'smooth'
      },
    
      
      title: {
        text: 'Tracker',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
  },
  
    series: [
      
      {
        name: "Incomes",
        data: incomes.map((income) => income.amount)
      },
      {
        name: "Expenses",
        data: expenses.map((expense) => expense.amount)
      }
    ]
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChartBar;
