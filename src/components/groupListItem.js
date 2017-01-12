import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class GroupListItem extends React.Component {
	render() {
		const {rootStore, group} = this.props;
		//TODO: actual links in href

		return (
			<a className="list-group-item" href="#">{group.name}</a>
		);
	}
}