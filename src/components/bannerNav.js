import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class BannerNav extends React.Component {
	render() {
		const {userStore} = this.props;

		return (
			<nav className="navbar navbar-default ps-nav">
				<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Project Swimmy</a>
				</div>
				<a className="navbar-text navbar-right ps-profile-link" href="#">{userStore.user.name}</a>
				</div>
			</nav>
		);
	}
}