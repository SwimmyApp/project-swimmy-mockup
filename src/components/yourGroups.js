import React from 'react';
import {observer} from 'mobx-react';

import GroupListItem from './groupListItem';

import DevTool from 'mobx-react-devtools';

@observer
export default class YourGroups extends React.Component {
	render() {
		const {rootStore} = this.props;
		const user = rootStore.userStore.user;
		const memberships = rootStore.userStore.memberships;
		const groups = rootStore.groupStore.groups;

		return (
			<div>
				<h3>Your Groups</h3>
				<div className="list-group">
					{/* ideally, the API would provide groups as an include along with memberships, but for now, filter it */}
					{groups.filter((group) => {
						var member = false;
						memberships.forEach((membership) => {
							if (membership.group_id === group.id) {
								member = true;
							}
						});
						return member;
					})
					.map(group => {
						return <GroupListItem rootStore={rootStore} group={group} key={group.id}></GroupListItem>;
					})}
			</div>
			</div>
		);
	}
}
