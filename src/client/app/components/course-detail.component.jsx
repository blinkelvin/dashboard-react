import React, {Component} from "react";

class CourseDetail extends Component {
	render() {
		return (		
			<h4>Course {this.props.params.id}</h4>
       );
	}
}

export default CourseDetail;