import React from 'react'
import {observer} from 'mobx-react'
import {computed, action, observable} from 'mobx'

import DevTool from 'mobx-react-devtools'

// swimmy classes
import EventMonthItem from './eventMonthItem'
import {RsvpResponse} from '../models/RSVPModel'

import * as styles from './styles/eventStyles.scss';


@observer
export default class YourEvents extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      eventFilter: 'Upcoming'
    };
  }

  render() {
    const {rootStore} = this.props
    const user = rootStore.userStore.user
    const memberships = rootStore.userStore.memberships
    const userGroups = rootStore.groupStore.groups.filter((group) => { // Filter for groups we belong to
      var member = false;
      memberships.forEach((membership) => {
        if (membership.group_id === group.id) {
          member = true
        }
      });
      return member;
    });
    const events = rootStore.eventStore.events;

    return (
		<div>
			<div style={{backgroundColor:'lightgray'}}>
				<div className="row">
	        <div className="col-xs-9 col-xs-offset-1">
	          <div id="imaginary_container" style={{marginTop:20, marginBottom:20}}> 
	            <div className="input-group">
	              <span className="input-group-addon" style={{backgroundColor:'white'}}>
	                <button type="submit">
	                  <span className="glyphicon glyphicon-search"></span>
	                </button>  
	              </span>
	              <input type="text" className="form-control"  placeholder="Events" />
	            </div>
	          </div>
	        </div>
				</div>
			</div>
			<hr style={{marginTop:0, marginBottom:10, border:0}}/> {/* special case to make layout look right */}
			<div className="list-event">
				{
					this.orderMonths()
					.map(month => {
  return <EventMonthItem rootStore={rootStore} month={month} events={this.filterEventsForMonth(events, month)} key={month}></EventMonthItem>
})
				}
				{/* ideally, the API would provide groups as an include along with memberships, but for now, filter it */}
			</div>
		</div>
    );
  }

  toggleSearch = () => {
    let searchVisible = !this.state.searchVisible;
    this.setState({
      searchVisible: searchVisible
    });
  }

  filterEventsForMonth = (events, month) => {
    let filteredList = events.filter((ps_event) => {
			// If the event is not in the right month ignore it
      if (new Date(ps_event.startdatestring).getMonth() != month) {
        return false
      }

			// only include events that have not passed
      var dateHasPassed = (Date.now() > new Date(ps_event.enddatestring)) ? true : false;
      return !dateHasPassed
    })
    return filteredList
  }

  orderMonths = () => {
    var today = new Date(Date.now())
    var month = today.getMonth()

    var monthList = []
    for (var i = 0; i < 12; ++i) {
      monthList.push((month + i) % 12)
    }

    return monthList
  }

  changeEventFilter = (newEventFilter) => {
    this.setState({
      eventFilter:newEventFilter
    });
  }
}