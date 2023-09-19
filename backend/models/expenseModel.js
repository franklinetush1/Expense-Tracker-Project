const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        maxLength: 50
    },
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    type:{
        type: String,
        default: 'expense',
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)