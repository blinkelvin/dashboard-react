import React, {Component} from "react";

class Panel extends Component {
	render() {
		return (				
			<div className="col-xs-6 col-sm-4 placeholder tab-panel">
				<ul className="nav nav-tabs">
					<li role="presentation" className="panel-comp active">
						<a href="#">
							<div className="score">12</div>
							<div className="title">DONE COURSE</div>
						</a>
					</li>
				</ul>
				<ul className="list-group">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Morbi leo risus</li>
					<li className="list-group-item">Porta ac consectetur ac</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
       );
	}
}

export default Panel;