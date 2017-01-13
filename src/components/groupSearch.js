import React from 'react';
import {observer} from 'mobx-react';

import GroupListItem from './groupListItem';

import DevTool from 'mobx-react-devtools';

@observer
export default class GroupSearch extends React.Component {

	render() {
		const {rootStore} = this.props;
		const user = rootStore.userStore.user;
		const groups = rootStore.groupStore.groups;
		let zipcode = user.zipcode;
		let filteredIssue = 'Any';

		return (
			<div>
				<h3>Search groups</h3> 
				<div className="panel panel-default">
					<div className="panel-body">
						<form className="form-inline">
							<div className="form-group">
								<label htmlFor="ps-group-search-zipcode">Zipcode: </label>
								<input type="text" className="form-control" id="ps-group-search-zipcode" value={user.zipcode} onChange={this.handleZipcodeEdit}/>
							</div>
							<div className="form-group">
								<label htmlFor="ps-group-search-issues">Filter by issue: &nbsp;&nbsp;</label>
								<select className="form-control" id="ps-group-search-issues" onChange={this.handleIssueFilter} defaultValue={filteredIssue}>
									<option>Any</option>
									{/* TODO: create an issues store and map issue list here */}
								</select>
							</div>
						</form>
					</div>
				</div>
				<h3>Results:</h3>
				<div className="list-group">
					{groups.map(group => {
						return <GroupListItem rootStore={rootStore} group={group} key={group.id}></GroupListItem>;
					})}
				</div>
			</div>
		);
	}

	//TODO: implement
	handleIssueFilter = (event) => {
		if (event.target.value === 'Any') {
			//show all
			return;
		}
		else {
			//filter
			return;
		}
	};

	//TODO: implement this, mock up some groups in a far-flung zipcode
	handleZipcodeEdit = (event) => {
		return;
	}

}