import React, {Component} from "react";

import Sidebar from './sidebar.component.jsx'
import TopBar from './topbar.component.jsx'
import ProfileBar from './profilebar.component.jsx'
import NavBar from './navbar.component.jsx'

class Main extends Component {
	render() {
		return (
			<div>
				<Sidebar name={this.props.route.data.name}/>
				<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					<TopBar /> 
					<ProfileBar data={this.props.route.data}/> 
					<NavBar /> 
					<div className="components">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Main;