import React, { useEffect } from 'react'
import { iconData } from '../Data/Data'
import avatar from "../img/avatar.png"
import "./Styles/Dashsidebar.css"
import { Dashboard } from './Dashboard';
import Activity from './Activity';
import {IncomesDash} from './IncomesDash';
import { ExpenseDash } from './ExpensesDash';
import { useState } from 'react';
import { useGlobalContext } from '../Data/globalContext'
import { useNavigate } from 'react-router-dom';

export default function DashSidebar() {

  const { getIncomes, getExpenses, loggedEmail, emaillogged} = useGlobalContext();
  const navigate = useNavigate();
  const user = localStorage.getItem('loggeduser')

  useEffect(() => {
    const email = localStorage.getItem('loggedemail');
    emaillogged(email);
    getIncomes(loggedEmail);
    getExpenses(loggedEmail);
    
} ,[])
    
    const [active, setActive] = useState(1);
    const displayData = () => {
        switch (active) {
          case 1:
            return <Dashboard />;
          case 2:
            return <Activity />;
          case 3:
            return <IncomesDash />;
          case 4:
            return <ExpenseDash />;          
          default:
            return <Dashboard />;
        };
    }

    const signout = () => {
      localStorage.removeItem('token');
      navigate("/Login");

    }

  return (
    <div className="App">        
    
       <div className='dashsidebar'>
            <div className='pop_up'>

            </div>

            <div className="frofilepic">
                <img src={avatar} alt="Avatar" className='profilepic' />
                <h5>Hello {user}</h5>
            </div>
            
            
            {
                iconData.map((item) => {                 

                    return (
                    <div className={active === item.id ? "activeDash": "dash-cont"} key={item.id} 
                    onClick={() => setActive(item.id)}
                    >
                        <section><item.icon/></section>
                        <div className="element_name">{item.name}</div>
                    </div>
                
                    )            
            })

            }
        <button className="signout" onClick={() => signout()}>Sign Out</button>           

        </div>

        {displayData()}

    </div>
  )
}
