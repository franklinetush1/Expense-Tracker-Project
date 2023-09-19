import React from 'react'
import { dateFormat } from '../Components/utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../Data/Data';
import Button from './Button';
import "./Styles/HistoryItem.css"

function HistoryItems({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }
 
    console.log('type', type);
    console.log('category', category)
    return (
        <div className="syle">
        <div className="historyitem">
            <div className="icon">
                {type === 'income' ? categoryIcon() : expenseCatIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'10px'}
                            bRad={'50%'}
                            bg={'red'}
                            color={'white'}
                            iColor={'#fff'}
                            hColor={'green'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}



export default HistoryItems