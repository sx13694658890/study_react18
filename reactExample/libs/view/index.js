import React, { Component } from 'react'
import PropTypes from "prop-types";
import classnames from "classnames";
export default class index extends Component {
    static propTypes={
        show:PropTypes.any
    }
  render() {
    const  {show=true,className="",children}=this.props;
    const  mixed={style:{...children.props.style}};
    if(!show)mixed.style.display="none";
    mixed.className=classnames(className?className:"",children.props.className?children.props.className:"")
    return React.cloneElement(React.Children.only(children),mixed)
  }
}
