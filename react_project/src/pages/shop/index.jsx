import React, { Component} from 'react';
import PropTypes from 'prop-types';
import "./index.css";
class Index extends Component {
  static defaultProps={
    title:"Shop"
  }
  state={
    imgsrc:require("../../assets/images/dd032dbcba4c620d.jpg.avif"),
    inputvalue:0
  }
  onHandlerChange=(event)=>{
    let value=event.target.value
    const regexp=/^\d*?$/;
   
    this.setState({
      inputvalue:(regexp.test(value))?value:value.replace(/[^\d]/, '').replace(/[a-zA-Z]|[\u4e00-\u9fa5]/,"")
    })
  }
  render() {
    const {imgsrc,inputvalue}=this.state;
    return (
      <div>
        {this.props.title}
        <article className='cardShop'>
          <div className='showimg'>
            <img src={imgsrc} alt="加载失败" />
            </div>
          <div className='cardShop_mesage'>
            <h6 className='cardShop_mesage_title'>ipad</h6>
            <p className='cardShop_mesage_source'>苹果自营店</p>
          </div>
        </article>
        <section className='counter'>
          <div className='counter_body'>
            <span 
            className='counter_body_red'
            onClick={()=>{
              this.setState({inputvalue:inputvalue-1})
            }}
            >-</span>
            <input className='counter_body_num' type="text" 
           value={inputvalue}
           disabled
           
            />
            <span 
            className='counter_body_add'
            onClick={()=>{
              this.setState({inputvalue:inputvalue+1})
            }}
            >+</span>
          </div>
        </section>
      </div>
    );
  }
}


Index.propTypes = {
  title:PropTypes.string
};


export default Index;
