import React, {Component} from "react";

class QeaDetail extends Component {
	render() {
		return (		
			<h4>Q&A {this.props.params.id}</h4>
		);
	}
}

export default QeaDetail;