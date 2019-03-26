import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'; //indexもしっかりと読み込むようにしないとpropsがundefindeになってしまうので注意, 
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EventsNew from './components/events_new';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/events/new" component={EventsNew} />
                <Route exact path="/" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();