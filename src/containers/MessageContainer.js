import React, { Component } from 'react';
import Message from './../components/Message';
import {connect} from 'react-redux'
class MessageContainer extends Component {
  
  render() {
    var {message}=this.props;
    return (
          <Message message={message}/>
    );
  }
}

const mapstateToProps=(state)=>{
  return {
    message: state.message
  }
}

export default connect(mapstateToProps, null)(MessageContainer);
