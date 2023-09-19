import React from 'react'
import icon1 from "../../img/illustration.png"
import icon2 from "../../img/graphDas.JPG"
import icon3 from "../../img/catEgory.JPG"
import icon4 from "../../img/incoDash.JPG"
import icon5 from "../../img/expDash.JPG"



const Features = () => {

  const features = [
    {
      icon:icon5,
      title: "Expense Tracking",
      content: "Effortlessly track your daily expenses and stay on top of your spending habits"
    },
    {
      icon:icon4,
      title: "Income Tracking",
      content: "Effortlessly track your income and have better understanding of your cash inflows"
    },
    {
      icon:icon2,
      title: "Data Visualisation",
      content: "Visualize your spending patterns with interactive charts and graphs"
    },
    {
      icon:icon3,
      title: "Category Grouping",
      content: "Group all your cash inflows and outflows into categories to provide better insights on how your money is distributed"
    }
  ]
  return (
    
    <div>
      
      <div className="features" id='Features'>
      <h1 className='featureHeading'>Features</h1>
      <img src={icon1} className='featurIcon' />     
      {features.map((feature) => (
          <div className="featureDiv">
            <div className="featureIcon">
              <img src={feature.icon} />
              </div>
          <h1>{feature.title}</h1>
          <h4>{feature.content}</h4>
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default Features