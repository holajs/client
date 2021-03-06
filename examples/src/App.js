import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import routes from './config/routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

// Router.run(routes, Router.HistoryLocation, (Handler, state) =>{
// 	React.render(<Handler {...state} />, document.getElementById('app'));
// });

ReactDom.render(<Router history={history}>{routes}</Router>, document.getElementById('app'))
