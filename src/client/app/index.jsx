import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';

import Main from './components/main.component.jsx'


import Knowledge from './components/knowledge.component.jsx'
import Course from './components/course.component.jsx'
import Exam from './components/exam.component.jsx'
import Qea from './components/qea.component.jsx'
import News from './components/news.component.jsx'
import Activity from './components/activity.component.jsx'
import Friends from './components/friends.component.jsx'

render(
    <Router history={browserHistory}>
        <Route component={Main}>
			<Route path="/" component={Knowledge}/>
			<Route path="/exam" component={Exam}/>
			<Route path="/course" component={Course}/>
			<Route path="/qea" component={Qea}/>
			<Route path="/news" component={News}/>
			<Route path="/activity" component={Activity}/>
			<Route path="/friends" component={Friends}/>
		</Route>
	</Router>, 
    document.getElementById('container')
);