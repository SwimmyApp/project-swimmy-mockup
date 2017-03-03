import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

// Swimmy imports
import EventListItem from './eventListItem'
import {RsvpResponse} from '../models/RSVPModel';

import * as styles from './styles/eventStyles.scss';

@observer
export default class EventMonthItem extends React.Component {
  render() {
    const {rootStore, events, date} = this.props;
    return (
			<div className={styles.eventContent}>
				<div className="row">
					<div className="col-xs-12 {styles.eventDateContent}">
							<strong>{this.parseDate(date)}</strong>
					</div>
				</div>
				{events.sort(this.datestringCompareFunction)
				.map(ps_event => {
  return (<div>
										<EventListItem rootStore={rootStore} ps_event={ps_event} key={ps_event.id}></EventListItem>
										<hr className={styles.eventhr}/>
									</div>);
})}
			</div>
    );
  }

  getMonth = (monthNumber) => {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[monthNumber]
  }

  parseDate (datestring) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var date = new Date(Date.parse(datestring)); // todo: check for invalid dates
    var day = date.getDay();
    var month = date.getMonth();
    var monthDay = date.getDate();
    var year = date.getFullYear();

    return (<p className="text-danger">{days[day]} {months[month]} {this.daySuffix(monthDay)}</p>);
  }

  daySuffix(i) {
	    var j = i % 10,
	        k = i % 100;
	    if (j == 1 && k != 11) {
	        return i + 'st';
	    }
	    if (j == 2 && k != 12) {
	        return i + 'nd';
	    }
	    if (j == 3 && k != 13) {
	        return i + 'rd';
	    }
	    return i + 'th';
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