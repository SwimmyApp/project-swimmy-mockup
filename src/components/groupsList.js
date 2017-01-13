import React from 'react';
import {observer} from 'mobx-react';

import GroupSearch from './groupSearch';
import YourGroups from './yourGroups';

import DevTool from 'mobx-react-devtools';

@observer
export default class GroupsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchVisible: false
		};
	}

	render() {
		const {rootStore} = this.props;
		let view;

		if (!this.state.searchVisible) {
			view = (
				<div>
					<YourGroups rootStore={rootStore}></YourGroups>
				</div>
			);
		}
		else {
			view = (
				<div>
					<div className="form-group">
						<button className="btn btn-primary btn-sm ps-group-back-btn" onClick={this.toggleSearch.bind(this)}>
							<span className="fa fa-angle-double-left" aria-hidden="true"></span> Back to your groups
						</button>
					</div>
					<GroupSearch rootStore={rootStore}></GroupSearch>
				</div>
			);
		}

		return (
			<div>
				<div className="row">
					<div className="col-xs-8">
						<h2>Groups</h2>
					</div>
					<div className="col-xs-4 text-right">
						{ this.renderSearchButton() }
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{ view }
					</div>
				</div>
			</div>
		);
	}

	renderSearchButton = () => {
		if (!this.state.searchVisible) {
			return (
				<div className="form-group">
					<button className="btn btn-primary btn-lg ps-find-groups-btn" onClick={this.toggleSearch.bind(this)}>
						<span className="fa fa-search" aria-hidden="true"></span> Find groups
					</button>
				</div>
			);
		}
	}

	toggleSearch = () => {
		let searchVisible = !this.state.searchVisible;
		this.setState({
			searchVisible: searchVisible
		});
	}
}