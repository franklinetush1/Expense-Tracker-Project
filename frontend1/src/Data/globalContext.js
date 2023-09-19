import React, { useContext, useState, useEffect } from "react"
import axios from 'axios'



const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [Authenticated, setAuthenticated] = useState(false)
    const [loggedUser, setLoggedUser] = useState("")
    const [loggedEmail, setLoggedEmail] = useState("")

    //calculate incomes
    const emaillogged = (email) => {
        setLoggedEmail(email)
    }       
    const addIncome = async (income) => {
        
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes(loggedEmail)
    }

    const getIncomes = async (targetEmail) => {
        try {
            const response = await axios.get(`${BASE_URL}get-income`);
            console.log("API Response Data:", response.data);
    
            // Filter the response data to include only entries with the targetEmail
            const filteredIncomes = response.data.filter((income) => {
                console.log (targetEmail);
                console.log("Comparing:", income.email, targetEmail);
                return income.email === targetEmail; // Use trim to remove leading/trailing spaces
            });
    
            console.log("Filtered Incomes:", filteredIncomes);
            setIncomes(filteredIncomes);
        } catch (error) {
            // Handle error
            console.error("Error fetching incomes:", error);
        }
    };
    


    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes(loggedEmail)
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses(loggedEmail)
    }

    const getExpenses = async (targetEmail) => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`);
            console.log("API Response Data:", response.data);
    
            // Filter the response data to include only entries with the targetEmail
            const filteredExpenses = response.data.filter((income) => {
                console.log (targetEmail);
                console.log("Comparing:", income.email, targetEmail);
                return income.email === targetEmail; // Use trim to remove leading/trailing spaces
            });
    
            console.log("Filtered Expenses:", filteredExpenses);
            setExpenses(filteredExpenses);
        } catch (error) {
            // Handle error
            console.error("Error fetching incomes:", error);
        }
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses(loggedEmail)
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome += income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 5)
    }
    const transactionHistory1 = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
///new login
    const authenticate = (state) =>{
        setAuthenticated(state);
    }

    const userName = (name) =>{
        setLoggedUser(name);
    }


    useEffect(() => {
        const email = localStorage.getItem('loggedemail');
        console.log(email);
        emaillogged(email);
        getIncomes(loggedEmail)
        getExpenses(loggedEmail)
        totalExpenses()
        totalBalance()
    }, [])

/// new login
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            authenticate,
            Authenticated,
            userName,
            loggedUser,
            emaillogged,
            loggedEmail,
            transactionHistory1            
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}