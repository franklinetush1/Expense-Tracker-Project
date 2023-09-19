import React from 'react'
import "./Styles/Dashboard.css"
import { useGlobalContext } from '../Data/globalContext'
import { useEffect } from 'react'
import {ApexChartTwo} from './ApexChartTwo';
import { CategoryiconData } from '../Data/Data'
import  ApexChart from './ApexChart'


export const Dashboard = () => {
  const {totalExpenses, expenses, totalIncome, totalBalance, getIncomes, getExpenses, loggedEmail, emaillogged, transactionHistory1 } = useGlobalContext()
  useEffect(() => {
    const email = localStorage.getItem('loggedemail');
    console.log(email);
    emaillogged(email);
    getIncomes(loggedEmail);
    getExpenses(loggedEmail);
    totalExpenses();
    totalBalance();
},[])
  const [...history] = transactionHistory1();
  // Define a function to find the biggest amount expense
  const findBiggestExpense = (expenses) => {
    let biggestExpense = null;
    expenses.forEach((expense) => {
      if (!biggestExpense || expense.amount > biggestExpense.amount) {
        biggestExpense = expense;
      }
    });
    return biggestExpense
  };
  

  const biggestExpense = findBiggestExpense (expenses);

  return (    
    <div className='Dashboard'>
      
      <div className="chart">
        <ApexChart/>
        <ApexChartTwo/>
      </div>
        <div className="allstats">               
            <div className="stats-container">
                  <div className="monthexpense">
                      <div className='secExp'>
                        <p>Total Income</p>
                          {totalIncome()}
                      </div>
                      <div className='secExp1'>
                        <p>Total Expenses</p>
                          {totalExpenses()}
                      </div>
                      <div className="secExp2">
                        <p>Balance</p>
                        {totalBalance()}
                      </div>
                  </div>
                <div className="biggest"> {biggestExpense && (
                      <div>
                        <p>Biggest Expense:</p>
                        <div className='BiggestBlock'>
                              <div className='biggestExp'>
                                  <span>
                                  {(CategoryiconData.map(element => {
                                      if (element.category === biggestExpense.category){
                                        return(
                                        <span> <element.icon/></span>
                                        )     
                                      }
                                    }))}
                                  </span> 
                                  <div className="biggtitle">
                                    {biggestExpense.title}
                                  </div>
                                  <div className='biggestAmount'>Amount ${biggestExpense.amount}</div>                            
                              </div>                                                   
                            </div>               
                      </div>
                    )}               
                </div>
            </div>
            <div className='histo'>
              <p>Recent History</p> 
              {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div className="hist">
                      <div key={_id} className="history-itm">
                          <p style={{
                              color: type === 'expense' ? 'red' : 'green'
                          }}>
                              {title}
                          </p>
                          
                          <p className = 'pa' style={{
                              color: type === 'expense' ? 'red' : 'green'
                              
                          }}>
                              {
                                  type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                              }
                          </p>
                      </div>
                    </div>
                )
            })}
            </div>
      </div>      
    </div>   
  )
}
