import React from 'react'
import IncomeForm from './utils/IncomeForm'
import { useGlobalContext } from '../Data/globalContext';
import { useEffect } from 'react';
import HistoryItems from './HistoryItems';
import "./Styles/IncomeDash.css";

export const IncomesDash = () => {
  const {incomes, getIncomes,totalIncome, deleteIncome, loggedEmail} = useGlobalContext();

    useEffect(() =>{
        getIncomes(loggedEmail)
    }, [])

  return (
    <div className="input-income">    
    
        
        <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
        <div className="income-disp">
        <div className="income-content">
            <div className="form-container">
            <IncomeForm/>
            </div>            
        </div>
        <div className="incomes">
            {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <HistoryItems
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="green"
                                deleteItem={deleteIncome}
                            />
            })}
            </div>
            </div>

</div>
  )
}
