import React, {Component} from "react";
import { Link } from 'react-router';

class Row extends Component {
	render() {
		return (
			<Link
				to={this.props.type+"/"+this.props.item.id}
				className="list-group-item"
				key={this.props.item.id}>
				{this.props.item.title}
			</Link>
		);
	}
}

export default Row;