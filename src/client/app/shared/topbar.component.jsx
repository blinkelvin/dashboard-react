import React, {Component} from "react";

class TopBar extends Component {
	render() {
		return (				
			<div className="top-bar">
				<span className="top-icon glyphicon glyphicon-user" aria-hidden="true"></span>
				<span className="top-icon glyphicon glyphicon-comment" aria-hidden="true"></span>
				<span className="top-icon glyphicon glyphicon-bell" aria-hidden="true"></span>
			</div>
		);
	}
}

export default TopBar;