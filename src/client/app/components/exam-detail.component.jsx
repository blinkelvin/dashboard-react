import React, {Component} from "react";

class ExamDetail extends Component {
	render() {
		return (		
			<h4>Exam {this.props.params.id}</h4>
       );
	}
}

export default ExamDetail;