import React from 'react'
import ExpenseForm from './utils/ExpenseForm'
import { useGlobalContext } from '../Data/globalContext';
import { useEffect } from 'react';
import HistoryItems from './HistoryItems';
import "./Styles/ExpensesDash.css";

export const ExpenseDash = () => {
  const {expenses, getExpenses, deleteExpense, totalExpenses, loggedEmail} = useGlobalContext();

    useEffect(() =>{
        getExpenses(loggedEmail)
        console.log(loggedEmail)
    }, [])

  return (
    <div className="input-income">    
    
        <h2 className="total-income">Total Expenses: <span>${totalExpenses()}</span></h2>
        <div className="income-content">
            <div className="form-container">
            <ExpenseForm/>
            </div>
            <div className="expenses">
                {expenses.map((expense) => {
                    const {_id, title, amount, date, category, description,type} = expense;
                    return (
                      <HistoryItems
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="grey)"
                                deleteItem={deleteExpense}
                      />
                    )
                })}
            </div>
        </div>    
</div>
  )
}
