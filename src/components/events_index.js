//イベント一覧のためのコンポーネント
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {readEvents} from '../actions';

export class EventsIndex extends Component {
	render() {
		const props = this.props;

		return (<dev>Hello!</dev>);
	}
}


export default (EventsIndex);