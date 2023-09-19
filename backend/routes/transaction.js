const router = require('express').Router()
const { addExpense, getExpense, deleteExpense} = require('../controllers/expense')
const {addIncome, getIncome, deleteIncome} = require('../controllers/income')
const {registerFunc , loginFunc } = require('../controllers/user')

router.post('/add-income', addIncome)
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/login', loginFunc)
    .post('/register', registerFunc)

module.exports = router