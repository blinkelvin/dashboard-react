import React, {Component} from "react";

import Score from './score.component.jsx'
import Row from './row.component.jsx'
import { Link } from 'react-router';

class Panel extends Component {
	render() {			
		const classe = "col-md-4 col-xs-12 placeholder tab-panel type-".concat(this.props.data.type)
		const data = this.props.data.items;		
		console.log(data);
		const result = data.map((item) => {
			return (
				<Row item={item} type={this.props.data.type} />
			)
		});
		
		return (				
			<div className={classe}>
				<Score count={this.props.data.count} label={this.props.data.label}/>
				<ul className="list-group">
					{result}
					<Link to={this.props.data.type} className="list-group-item">
						Show More 
						<span className="top-icon glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
					</Link>
				</ul>
			</div>
		);
	}
}

export default Panel;