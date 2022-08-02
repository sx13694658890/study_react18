import React, { Component } from "react"
import {  } from "../../libs"
export default class Card extends Component{
    static defaultProps={
        bodyStyle:{
            padding:"20px"
        }
    }
    render(){
        const { header,bodyStyle,children }=this.props;
        return(
            <div style={this.style()} className={this.className("xl-card")}>
                {
                    header &&<div className="xl-card_header">{header}</div>
                }
                <div className="xl-card_body" style={bodyStyle}>
                    {children}
                </div>
            </div>
        )
    }
}

Card.propTypes={
    header:PropTypes.node,
    bodyStyle:PropTypes.object
}