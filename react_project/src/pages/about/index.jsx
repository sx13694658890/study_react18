import React, {createRef, Component } from 'react';
import PropTypes from 'prop-types';


class Index extends Component {
  static defaultProps={
    title:"About"
  }
  
  render() {
    return (
      <div ref={(e)=>this.devRef=e}>
        {this.props.title}
      </div>
    );
  }
}


Index.propTypes = {
  title:PropTypes.string
};


export default Index;
