import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    const {locale} = this.props;
    return (
      <div id="header-region" className="row">
        <h2>
            <Link to="/">TalentUI</Link>
        </h2>

        <nav className="navbar navbar-default" role="navigation">
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
                <li className="home"><Link to="/">{locale.nav1 || "home"}</Link></li>
                <li className="about"><Link to="/about">{locale.nav3 || "about"}</Link></li>
                <li className="demo"><Link to="/demo">{locale.nav2 || "demo"}</Link></li>
            </ul>
          </div>
        </nav>

        <form className="pure-form language-switcher">
          <fieldset>
            <select ref="langSwitcher" defaultValue="en" onChange={this.props.useI18n}>
              <option value="en">EN</option>
              <option value="zn">ZN</option>
            </select>
          </fieldset>
        </form>
      </div>
    )
  }
}