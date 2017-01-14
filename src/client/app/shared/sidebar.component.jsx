import React, {Component} from "react";
import {Link} from 'react-router';

class Sidebar extends Component {
	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<ul className="nav nav-sidebar">
					<li className="profile-list">
						<img className="pic" src="./src/assets/img/profile.png"/>
						<div className="title">HOANG NGUYEN</div>
					</li>
					<li><Link activeClassName="side-active" to="/">DASHBOARD <span className="sr-only">(current)</span></Link></li>
					<li><Link activeClassName="side-active" to="/course">COURSE</Link></li>
					<li><Link activeClassName="side-active" to="/exam">EXAM</Link></li>
					<li><Link activeClassName="side-active" to="/qea">Q&A </Link></li>
					<li><Link activeClassName="side-active" to="/news">NEWS </Link></li>
				</ul>
			</div>
		);
	}
}

export default Sidebar;