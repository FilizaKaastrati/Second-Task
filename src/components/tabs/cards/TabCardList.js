import TabnCardItem from "./TabCardItem";
import clasess from "./TabCardList.module.css";
function TabCardList(props, index) {
  return (
    <ul>
        <div className={clasess.container}>
        {props.list.map(card => (
          <TabnCardItem
          key={index}
           domain={card.domain}
           price={card.price}
           descrition={card.descrition}
           button={card.button}
           />
        ))}
      </div>
    </ul>
  );
}
export default TabCardList;
