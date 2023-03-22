import React, { useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const ToggleItem = ({ title, body, isNested, icon}) => {
  const [expanded, setExpanded] = useState(false);
 

  const renderedQuestions = (questions) => {
    return questions.map((item, index) => {
      return <ToggleItem key={index} title={item.title} isNested={true} body={item.info}/>;
     
    });
  };
  
  return (
    <article className={isNested ? "question nested" : "question"}>
      <header className={expanded ? "open" : ""}>
        <h4 onClick={() => setExpanded(!expanded)} className="question-title">
          <div className="icon">{icon ? ( <AccountCircleOutlinedIcon color="primary" fontSize="large" />) : ''}</div> 
          <div>{title} { Array.isArray(body) && <div><small> {body.length} articles in this topic</small></div>}</div>
          
        </h4>
        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? ( <ExpandLessOutlinedIcon />) : (<KeyboardArrowDownOutlinedIcon />)}
        </button>
      </header>
      {expanded && !Array.isArray(body) && <p>{body}</p>}
      {expanded && Array.isArray(body) && <div className="body">{ renderedQuestions(body) }</div>}
    </article>
  );
};
export default ToggleItem;
