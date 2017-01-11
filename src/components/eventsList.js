import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class EventsList extends React.Component {
	render() {
		return (
			<div>
				<h2>Events</h2>
			</div>
		);
	}
}