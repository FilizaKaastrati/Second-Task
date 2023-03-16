import React, { useState } from "react";
import ToggleItem from "./ToggleItem";
import "./Toggle.css";

const nestedData = [
    {
        id: 1,
        title: "Why park a domain name in Parkname ?",
        info: "Parkname is the leading industry standard for domain name parking and monetization service. We offer a wide variety of services t0 help you achive success.",
      },
    {
      id: 11,
      title: 'About Us',
      icon: true,
      info: [
        {
            id: 111,
            title: 'Is Parkname Parking actually free?',
            info: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            id: 112,
            title: 'What you do?',
            info: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            id: 113,
            title: 'When was Parkname first founded?',
            info: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
    
      ]
    },


  ]

const Toggle = () => {
  const [nestedQuestions] = useState(nestedData);

  const renderedNestedQuestions = nestedQuestions.map((item, index) => {
    return <ToggleItem key={index} title={item.title} icon={item.icon}  body={item.info} />;
  });

  return (
    <div>
      <dl>{renderedNestedQuestions}</dl>
    </div>
  );
};

export default Toggle;