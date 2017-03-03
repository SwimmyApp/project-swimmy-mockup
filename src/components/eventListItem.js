import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

// Swimmy imports
import {RsvpResponse} from '../models/RSVPModel';
import * as styles from './styles/eventStyles.scss';

@observer
export default class EventListItem extends React.Component {
  render() {
    const {rootStore, ps_event} = this.props;
    const user = rootStore.userStore.user;
    return (
			<div className={styles.eventListItemContent}>
				<a className="list-group-item" href="#" className={styles.content}>

				<div className="row">
					<div className="col-xs-9 {styles.eventGroupNameContent}">
						{this.renderTag(ps_event)}
					</div>
					<div className="col-xs-3"> 
						<div className="pull-right">
							{this.renderRsvp(ps_event, user)}
						</div>
					</div>
				</div>

				<div className="row col-xs-12">
					<div className={styles.eventNameContent}>
						<strong>{ps_event.name}</strong>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-9 {styles.eventAddressContent}">
						{this.formatAddress(ps_event)}
					</div>
					<div className="col-xs-3 {styles.eventTimeContent}">
						{this.parseTime(ps_event)}
					</div>
				</div>
				</a>
			</div>
    );
  }

	// Rsvping shoudn't immediately make the event vanish from the list, but it should transform the rsvp button
  renderRsvp = (ps_event, user) => {
		// Has the user rsvpd? If so, display the rsvp, otherwise show the options. 
    var hasRsvp = false;
    var attending = false;
    var rsvpResponse = 'None';
    var totalAttending = 0
    ps_event.rsvps.forEach((rsvp) => {
      if (rsvp.user_id === user.id) {
        hasRsvp = true;
        rsvpResponse = rsvp.attending;
        attending = (rsvpResponse == RsvpResponse['ATTENDING']);
      } else {
        if (rsvp.attending == RsvpResponse['ATTENDING']) {
          totalAttending += 1
        }
      }
    });

    var val;
		// The user has rsvp'd show a single dropdown menu with the options (and chosen option highlighted)
    if (attending) {
      val = (
						<div>
							<span>
							<p className={styles.eventRsvp}><strong>{rsvpResponse}</strong></p>
							<p className={styles.eventNumberAttending}> w/ {totalAttending}</p>
							</span>
						</div>);
    } else {
      val = (
					<div className={styles.eventNumberAttending}>
						{totalAttending} Attending
					</div>
				);
    }

    return val;
  }

  attendingRsvps (ps_event) {
    let attending = ps_event.rsvps.filter((rsvp) => {
      if (rsvp.attending === RsvpResponse['ATTENDING']) {
        return true
      }
    });

    return attending.length
  }

  changeRsvpResponse = (newResponse, ps_event, uid) => {
    this.props.rootStore.eventStore.updateEventRsvp(ps_event.id, uid, RsvpResponse[newResponse]);
  }

	// Todo: fill this function out once the event location field is determined
  formatAddress (ps_event) {
    return (
			<p>
	  		{ps_event.location}
			</p>
    );
  }

	// todo: implement with examples
  renderTag(ps_event) {
    return (<div>
							By <strong>{this.groupFromEvent(ps_event)}</strong>
						</div>);
  }

  parseTime (ps_event) {
    var startDate = new Date(Date.parse(ps_event.startdatestring)); // todo: check for invalid dates
    var endDate = new Date(Date.parse(ps_event.enddatestring));

    var startHours = startDate.getHours();
    var startMinutes = startDate.getMinutes();
    startMinutes = startMinutes > 9 ? startMinutes : '0' + startMinutes; // add a leading zero for 0-9 minutes
    var startAMPM = (startHours >= 12 ? 'PM' : 'AM');
    startHours = (startHours > 12) ? (startHours - 12) : startHours;

    var endHours = endDate.getHours();
    var endMinutes = endDate.getMinutes();
    endMinutes = endMinutes > 9 ? endMinutes : '0' + endMinutes; // add a leading zero for 0-9 minutes
    var endAMPM = (endHours >= 12 ? 'PM' : 'AM');
    endHours = (endHours > 12) ? (endHours - 12) : endHours; 

    return (<div className="pull-right">{startHours}:{startMinutes} {startAMPM} - {endHours}:{endMinutes} {endAMPM}</div>)
  }

  groupFromEvent (ps_event) {
    var groupName = 'None'
    this.props.rootStore.groupStore.groups.forEach((group) => {
      if (group.id === ps_event.group_id) {
        groupName = group.name;
      }
    });
    console.log('Returning group name ' + groupName);
    return groupName;
  }


}