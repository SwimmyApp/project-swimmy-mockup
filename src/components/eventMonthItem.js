import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

// Swimmy imports
import EventDayItem from './eventDayItem'
import {RsvpResponse} from '../models/RSVPModel';
import * as styles from './styles/eventStyles.scss';

@observer
export default class EventMonthItem extends React.Component {
  render() {
    const {rootStore, events, month} = this.props;
    return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						{this.getMonth(month)}
						<hr className={styles.eventhr} />
					</div>
				</div>
				{
					this.orderDays(month)
					.map(day => {
  console.log(month)
  let filteredEvents = this.filterEvents(events, day)
  if (filteredEvents.length > 0) {
    return <EventDayItem rootStore={rootStore} date={filteredEvents[0].startdatestring} events={filteredEvents} key={month+'_'+day}></EventDayItem>
  }
})
				}
			</div>
    );
  }

	// filter to events only occuring on the day in questions
  filterEvents = (events, day) => {
    let filteredList = events.filter((ps_event) => {
      var eventDate = new Date(ps_event.startdatestring).getDate()
      if (eventDate != day) {
        return false
      }
      return true
    });
    return filteredList
  }

  orderDays = (month) => {
    var today = new Date(Date.now())
    var currentMonth = today.getMonth()

    var day = (currentMonth == month) ? today.getDate() : 1 // start from the current date
    var year = today.getFullYear()

    if (month < currentMonth) { // must be from next year
      year += 1
    }

    if (month == 11) { // Roll over to next year to get correct # days for this december: edge case
      year += 1
    }

    var lastDayOfMonth = new Date(year, (month+1)%12, 0).getDate()
    var dayList = []
    for (var i = day; i <= lastDayOfMonth; ++i) {
      dayList.push(i)
    }

    return dayList
  }

  getMonth = (monthNumber) => {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return (<div className={styles.eventMonthContent}> {months[monthNumber]} </div>);
  }

		// Compare function by date for list.sort, a and b are datetime strings compatible with Date.
  datestringCompareFunction = (a, b) => {
    var aDate = new Date(a.startdatestring);
    var bDate = new Date(b.startdatestring);

    if (aDate > bDate) {
      return 1;
    } else if (aDate < bDate){
      return -1;
    } else { // dates are equal
      return 0
    }
  }
}