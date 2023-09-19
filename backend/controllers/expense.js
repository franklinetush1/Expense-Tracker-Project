const ExpenseSchema = require('../models/expenseModel')

exports.addExpense = async(req, res) =>{
    const {email, title, amount, category, description,date} = req.body
    const Expense = ExpenseSchema ({
        email,
        title,
        amount,
        category,
        description,
        date
    })

    console.log(Expense)
    try {
        if(!title ||!category||!description||!date){
            return res.status(400).json({message:"All fields are required"})
        }
        if(!email){
            return res.status(400).json({message: "No user Logged in"})
        }
        if(amount<0||!amount === 'number'){
            return res.status(400).json({message:"Expense incorrect"})
        }
        await Expense.save()
        res.status(200).json({message: "Expense saved"})
        
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }

}

exports.getExpense = async(req,res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}

exports.deleteExpense = async (req,res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({expense: 'Expense Delete'})
        })
        .catch((err) => {
            res.status(200).json({expense: 'Server Error'})
        })
}