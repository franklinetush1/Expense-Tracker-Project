import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../Data/globalContext'
import { dateFormat } from '../Components/utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()
    console.log(expenses)
    
    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2,
                borderWidth: 3,

            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set your desired background color here
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 3,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
            }

        ]


    };

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        elements: {
          line: {
            tension: 0, // Disable line smoothing if desired
          },
        },
        layout: {
          padding: 10, // Add padding to the chart area
        },
        backgroundColor: 'rgba(255, 0, 0, 0.1)', // Set the entire chart background color
      };


    return (
        <ChartStyled >
            <Line data={data} options={options}/>
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: white;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 35%;
    width: 70%;
    margin: 20px auto;

`;

export default Chart