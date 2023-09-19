const IncomeSchema = require('../models/incomeModel')

exports.addIncome = async(req, res) =>{
    const {email, title, amount, category, description, date} = req.body
    const income = IncomeSchema ({
        email,
        title,
        amount,
        category,
        description,
        date
    })


    try {
        if(!title ||!category||!description||!date){
            return res.status(400).json({message:"All fields are required"})
        }
        if(!email){
            return res.status(400).json({message: "No user Logged in"})
        }
        if(amount<0||!amount === 'number'){
            return res.status(400).json({message:"Amount incorrect"})
        }
        await income.save()
        res.status(200).json({message: "Income saved"})
        
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }

}

exports.getIncome = async(req,res) => {
    try {
        const incomes = await IncomeSchema.find( ).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}

exports.deleteIncome = async (req,res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({income: 'Income Delete'})
        })
        .catch((err) => {
            res.status(200).json({income: 'Server Error'})
        })
}