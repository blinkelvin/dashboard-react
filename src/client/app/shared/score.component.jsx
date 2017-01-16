import React, {Component} from "react";

class Score extends Component {
	render() {
		return (
			<ul className="nav nav-tabs">
				<li role="presentation" className="panel-comp active">
					<a href="#">
						<div className="score">{this.props.count}</div>
						<div className="score title">{this.props.label}</div>
					</a>
				</li>
			</ul>
		);
	}
}

export default Score;