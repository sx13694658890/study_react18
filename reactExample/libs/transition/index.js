import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import requestAnimationFrame from "raf"
export default class Transition extends Component {
    constructor(props){
        super(props)
        const {children}=props;

        this.state={
            children:children&&this.enchanceChildren(children)
        }
        this.didEnter=this.didEnter.bind(this)
        this.didLeave=this.didLeave.bind(this)
    }
  static propTypes = {second: third}
  componentWillReceiveProps(nextProps){
    const children=React.isValidElement(this.props.children)&& React.Children.only(this.props.children);
    const nextChildren=React.isValidElement(nextProps.children)&&React.Children.only(nextProps.children);
    if(!nextProps.name){
        this.setState({
            children:nextChildren
        })
        return
    }
    if(this.isViewComponent(nextChildren)){
        this.setState({
            children:this.enchanceChildren(nextChildren,{show:children?children.props.show:ture})
        })
    }else{
        if(nextChildren){
            this.setState({
                children:this.enchanceChildren(nextChildren)
            })
        }
    }
  }
  enchanceChildren(children,props){
    return React.cloneElement(children,Object.assign({ref:(el)=>{this.el=el}},props))
  }
  render() {
    return (
      <div>index</div>
    )
  }
}
