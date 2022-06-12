import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Index extends Component {
  static defaultProps={
    title:"首页"
  }
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}


Index.propTypes = {
  title:PropTypes.string
};


export default Index;
