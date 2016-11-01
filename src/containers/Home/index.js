import React, { Component, PropTypes } from 'react';
import homeCss from './home.scss'

export default class Home extends Component {
   
  render() {
    return (
      <div>
        <div className="page-header">
            <h1>header</h1>
        </div>
        
        <center>
          <div className="cover"></div><br />
          <button type="button" className="btn btn-primary">Start tutorial</button>
        </center>
        <hr />
        <div className="page-content">Content</div>
      </div>
    );
  }
}

