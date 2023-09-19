import React, { useState } from "react";
import { useGlobalContext } from '../Data/globalContext';
import Chart from "react-apexcharts";

const ApexChart = () => {
  const { incomes, expenses} = useGlobalContext();
  

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        
      },

      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
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
    
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },

      title: {
        text: 'Tracker',
        align: 'left',
        style: {
          fontSize: "16px",
          color: 'white'
        }
      },

      legend: {
        fontSize:"20px",
        labels: {
          colors: ['008000', 'FF0000']
        }
      }
  },
  
    series: [
      {
        name: "Incomes",
        data: incomes.map((income) => income.amount),
        
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
            type="area"
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
