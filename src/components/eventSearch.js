import React from 'react';
import {observer} from 'mobx-react';

import EventListItem from './eventListItem';

import DevTool from 'mobx-react-devtools';

@observer
export default class EventSearch extends React.Component {
  render() {
    const {rootStore} = this.props;
    const user = rootStore.userStore.user;
    const events = rootStore.eventStore.events;
    let zipcode = user.zipcode;
    let filteredIssue = 'Any';

    return (
			<div>
				<h3>Search events</h3>
				<div className="panel panel-default">
					<div className="panel-body">
						<form className="form-inline">
							<div className="form-event">
								<label htmlFor="ps-event-search-zipcode">Zipcode: </label>
								<input type="text" className="form-control" id="ps-event-search-zipcode" value={user.zipcode} onChange={this.handleZipcodeEdit}/>
							</div>
							<div className="form-event">
								<label htmlFor="ps-event-search-issues">Filter by issue: &nbsp;&nbsp;</label>
								<select className="form-control" id="ps-event-search-issues" onChange={this.handleIssueFilter} defaultValue={filteredIssue}>
									<option>Any</option>
									{/* TODO: create an issues store and map issue list here */}
								</select>
							</div>
						</form>
					</div>
				</div>
				<h3>Results:</h3>
				<div className="list-event">
					{events.map(ps_event => {
  return <EventListItem rootStore={rootStore} ps_event={ps_event} key={ps_event.id}></EventListItem>;
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