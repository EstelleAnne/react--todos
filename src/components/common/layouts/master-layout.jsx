import React, {Component, PropTypes} from 'react';

import Header from '../header/index'
import Footer from '../footer/index'
import Sidebar from '../sidebar/index'
 
export default class MasterLayout extends Component {
  render() {
  return (
      <div className="app">
        <Header />

        <div id="content-wrapper" className="row">
              <Sidebar />
              <div id="main-region" className="col-md-8">
                  {this.props.children}
              </div>
        </div>

        <Footer />
    </div>
  );
  }
}