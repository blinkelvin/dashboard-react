import React, {Component} from "react";

import Panel from '../shared/panel.component.jsx'

class Knowledge extends Component {
	render() {
		return (	
			<div className="row placeholders">		
				<Panel />		
				<Panel />		
				<Panel />	
				<Panel />
			</div>
       );
	}
}

export default Knowledge;