import React,{useState} from "react";

const Index = (props) => {
  const [date, setDate] = useState([2010, 2012, 2013]);
  const handlerDateChange = (e) => {
    props.onSelectChange&&props.onSelectChange(e.target.value)
  };
  return (
    <div>
      <label htmlFor="select">{props.title}:&nbsp;</label>
     <select name="请选择" id="select" value={props.year} onChange={handlerDateChange}>
     {date.map((item) => {
        return <option key={item} value={item}> {item} </option>;
      })}
     </select>
    </div>
  );
};

export default Index;
