import React, {Component} from "react";

import { Link } from 'react-router';

class Panel extends Component {
	render() {			
		console.log(this.props.data)
		const classe = "col-sm-4 placeholder tab-panel type-".concat(this.props.data.type)
		const data = this.props.data.items;				
		const result = data.map((item) => {
			return (
                <Link
                    to={"/knowledge/"+item.id}
                    className="list-group-item"
                    key={item.id}>
                    {item.title}
                </Link>
			)
		});
		return (				
			<div className={classe}>
				<ul className="nav nav-tabs">
					<li role="presentation" className="panel-comp active">
						<a href="#">
							<div className="score">{this.props.data.count}</div>
							<div className="score title">{this.props.data.label}</div>
						</a>
					</li>
				</ul>
				<ul className="list-group">
					{result}
				</ul>
			</div>
       );
	}
}

export default Panel;