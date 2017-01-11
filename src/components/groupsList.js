import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class GroupsList extends React.Component {
	render() {
		return (
			<div>
				<h2>Groups</h2>
			</div>
		);
	}
}