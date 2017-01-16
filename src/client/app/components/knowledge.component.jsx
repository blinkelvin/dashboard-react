import React, {Component} from "react";

import Panel from '../shared/panel.component.jsx'

import { Link } from 'react-router';

class Knowledge extends Component {	
	render() {
		const data = this.props.route.data.dashboard;	
		console.log(this.props.route.data.dashboard);
		const result = data.map((item) => {
			return (
				<Panel data={item} route={this.props.route.path}/>
			)
		});
		
		return (	
			<div className="row placeholders">		
				{result}	
			</div>
		);
	}
}

export default Knowledge;