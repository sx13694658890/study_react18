import React ,{useState}from "react";
import "./index.css";
const Index = () => {
    const [formdate,setformdate] = useState({
      inputValue1:"",
      inputValue2:"",
      inputValue3:"",
    });
    const handlerChange=()=>{

    }
  return (
    <div className="form-main">
      <div className="form-main-item">
        <label htmlFor="data">日期</label>
        <input onChange={handlerChange}  value={formdate.inputValue1} type="date" id="data" />
      </div>
      <div className="form-main-item">
        <label htmlFor="desc">内容</label>
        <input onChange={handlerChange} value={formdate.inputValue2} type="text" id="desc" />
      </div>
      <div className="form-main-item">
        <label htmlFor="time">时长</label>
        <input onChange={handlerChange}  value={formdate.inputValue3} type="text" id="time" />
      </div>
      <div className="form-main-button">
        <button>添加</button>
      </div>
    </div>
  );
};

export default Index;
