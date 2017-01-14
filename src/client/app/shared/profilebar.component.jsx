import React, {Component} from "react";

class ProfileBar extends Component {
	render() {
		return (
				<div className="profile-bar">
					<div className="media">
						<div className="media-left media-middle"> 
							<a href="#"> <img alt="64x64" className="media-object" src="./src/assets/img/profile.png" data-holder-rendered="true"></img> 
							</a> 
						</div>
						<div className="media-body">
							<div className="media-heading"><b>HOANG NGUYEN</b></div>
							<div className="media-body">
								<div>Student</div>
								<div>8,782 exp</div>
							</div>
						</div>
					</div>
				</div>
       );
	}
}

export default ProfileBar;