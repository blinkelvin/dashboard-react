import React, {Component} from "react";
import {Link} from 'react-router';

class NavBar extends Component {
	render() {
		return (				
				<div className="nav-bar" >
					<div className="container">
						<div className="navbar-header page-scroll">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav nav-pills" id="bs-example-navbar-collapse-1">
								<li role="presentation"><Link activeClassName="nav-active" to="/">KNOWLEDGE</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/course">COURSE</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/exam">EXAM</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/qea">Q&A</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/news">NEWS</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/activity">ACTIVITY</Link></li>
								<li role="presentation"><Link activeClassName="nav-active" to="/friends">FRIENDS</Link></li>
							</ul>	
						</div>
					</div>
				</div>
       );
	}
}

export default NavBar;