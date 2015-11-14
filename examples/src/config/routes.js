import React from 'react';
import Main from '../components/Main';
import Buttons from '../components/Buttons';

import { Router, IndexRoute, Route, Link } from 'react-router';

export default (
	<Route path="/" component={Main} >
		<IndexRoute component={Buttons} />
	</Route>
);
//<Route path="/typography" component={Typography} />
