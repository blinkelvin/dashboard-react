import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';

import Main from './shared/main.component.jsx'


import Knowledge from './components/knowledge.component.jsx'

import Course from './components/course.component.jsx'
import CourseDetail from './components/course-detail.component.jsx'

import Exam from './components/exam.component.jsx'
import ExamDetail from './components/exam-detail.component.jsx'

import Qea from './components/qea.component.jsx'
import QeaDetail from './components/qea-detail.component.jsx'

import News from './components/news.component.jsx'
import Activity from './components/activity.component.jsx'
import Friends from './components/friends.component.jsx'

const data = 
	{
		id:1,
		name: "HOANG NGUYEN",
		type: "Student",
		stars: 3,
		exp: 8782,
		dashboard:[
			{
				id: 1,
				type: "course",
				label: "DONE COURSE",
				count: 12,
				items:[
					{
						id:1,
						title: "Basic for UX Designer"
					},
					{
						id:2,
						title: "10 steps to improve your wireframe"
					},
					{
						id:3,
						title: "A Better Way To Request App Ratings"
					},
					{
						id:4,
						title: "How To Speed Up Your WordPress Website"				
					},
				]
			},
			{
				id: 1,
				type: "qea",
				label: "ASKING QUESTIONS",
				count: 27,
				items:[
					{
						id:1,
						title: "How to make good logo?"
					},
					{
						id:2,
						title: "What are the best mobile apps for ..."
					},
					{
						id:3,
						title: "What's the difference between UI and ..."
					},
					{
						id:4,
						title: "What logos include hidden messages ..."
					},
				]
			},
			{
				id: 1,
				type: "exam",
				label: "FOLLOWING EXAMS",
				count: 19,
				items:[
					{
						id:1,
						title: "Basic for UX Designer"},
					{
						id:2,
						title: "10 steps to improve your wireframe"
					},
					{
						id:3,
						title: "A Better Way To Request App Ratings"
					},
					{
						id:4,
						title: "How To Speed Up Your WordPress Website"
					},
				]
			}
		]
	};

render(
    <Router history={browserHistory}>
        <Route component={Main} data={data}>
			<Route path="/" component={Knowledge} data={data}/>
			<Route path="/exam" component={Exam}/>
			<Route path="/exam/:id" component={ExamDetail}/>
			<Route path="/course" component={Course}/>
			<Route path="/course/:id" component={CourseDetail}/>
			<Route path="/qea" component={Qea}/>
			<Route path="/qea/:id" component={QeaDetail}/>
			<Route path="/news" component={News}/>
			<Route path="/activity" component={Activity}/>
			<Route path="/friends" component={Friends}/>
		</Route>
	</Router>, 
    document.getElementById('container')
);