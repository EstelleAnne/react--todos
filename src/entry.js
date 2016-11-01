import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './components/common/header'
import Footer from './components/common/footer'
import Sidebar from './components/common/sidebar'

import * as i18nActions from './redux/modules/i18n';

//加载reduces
import * as reducers from './redux/modules';
//加载入口生成器
import {CreateEntry, getBSGlobal, getRouteConfig} from 'TalentCore';

@connect(
  state => ({
    locale: state.i18n.locale
  }),
  {...i18nActions}
)
export default class App extends Component {
  
  handleLanguageSwitch (evt) {
    this.props.switchLocale(evt.target.value)
  }
  render() {
    const {locale} = this.props;
    return (
      <div className="container">
        <Header useI18n={this.handleLanguageSwitch.bind(this)} locale={locale} />
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

// var staticPath = getBSGlobal('staticPath');
// __webpack_public_path__ = staticPath;

var getPageBundl = function(pageName){
  var first = pageName.substring(0,1).toUpperCase();
  var end = pageName.substring(1,pageName.length);
  var pages = first + end;
  return require("./containers/" + pages + '/index');
}
var routes = getRouteConfig(getPageBundl, {component:App,indexRoute: {
      onEnter: (nextState, replace) => replace('/home')
    }})
//创建入口页
CreateEntry({
    "routes": routes
    ,"reducers": reducers
});

