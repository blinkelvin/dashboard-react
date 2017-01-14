import React, {Component} from "react";

import Panel from '../shared/panel.component.jsx'

import { Link } from 'react-router';

class Knowledge extends Component {	
	render() {
		// Get data from route props
		const data = this.props.route.data;	
		const result = data.map((item) => {
			return (
				<Panel data={item}/>
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