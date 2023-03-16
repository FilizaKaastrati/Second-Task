import clasess from './TabCardItem.module.css'
function TabCardItem(props){
  return (
    <div className={clasess.cards}>
      <div className={clasess.card}>
          <h2> {props.domain} </h2>
          <div>
            <h3>{props.price}</h3>
            </div>
            <div>
              <p className={clasess.p}>{props.descrition}</p>
            </div>
            <div>
              <button className={clasess.btn}>{props.button}</button>
            </div>
        </div>
    </div>
  );
}

export default TabCardItem;
