import React from 'react';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';


import Header from '../header/index'
import Footer from '../footer/index'
import Sidebar from '../sidebar/index'
import QuickSidebar from '../sidebar/quick-sidebar'
import PageToolbar from '../page-toolbar'
import StyleCustomizer from '../style-customizer'

 
module.exports = React.createClass({
  propTypes: {
		title: React.PropTypes.string
  },
  render() {
	return (
	  <div>
			<Header />
			<div className="clearfix" />
				<div className="page-container">
					<Sidebar />
					<div className="page-content-wrapper">
						<div className="page-content">
							<StyleCustomizer />
							<h3 className="page-title">
								{this.props.title}
								<small> 这里是副标题</small>
							</h3>
							<div className="page-bar">
								<ul className="page-breadcrumb">
									<li>
										<i className="fa fa-home"></i>
										<a href="index.html">TalentUI</a>
										<i className="fa fa-angle-right"></i>
									</li>
									<li>
										<a href="#">{this.props.title}</a>
									</li>
								</ul>
								<PageToolbar />
							</div>
							{this.props.children}
						</div>
					</div>
					<a href="javascript:;" className="page-quick-sidebar-toggler"><i className="icon-close"></i></a>
					<QuickSidebar />
				</div>
			<Footer />
	  </div>
	);
  },
  componentDidMount() {
	if (ExecutionEnvironment.canUseDOM) {
	  document.title = this.props.title;
	}
  }
});