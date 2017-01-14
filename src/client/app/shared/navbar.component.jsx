import React, {Component} from "react";
import {Link} from 'react-router';

class NavBar extends Component {
	render() {
		return (				
				<div className="nav-bar">
					<ul className="nav nav-pills">
						<li role="presentation"><Link activeClassName="nav-active" to="/">KNOWLEDGE</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/course">COURSE</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/exam">EXAM</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/qea">Q&A</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/news">NEWS</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/activity">ACTIVITY</Link></li>
						<li role="presentation"><Link activeClassName="nav-active" to="/friends">FRIENDS</Link></li>
					</ul>
				</div>
       );
	}
}

export default NavBar;