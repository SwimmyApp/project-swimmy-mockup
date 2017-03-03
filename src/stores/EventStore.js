import {observable, computed, reaction} from 'mobx';
import EventModel from '../models/EventModel';
import {RsvpResponse} from '../models/RSVPModel';
import RSVPModel from '../models/RSVPModel';

export default class EventStore {
	@observable events = [];

  constructor({ root }) {
    this.root = root;
		//eventually we'll get this data asynchronously from server; for now, mocked JSON
		//here's some starter JSON for a event:
    `
		{
			'id': 1,
			'name': '',
			'description': '',
			'location': '',
			'group_id' : 1

		}
		`
    let events = [
      {
        'id': 1,
        'name': 'Bloomington Peace Action Coalition Meeting',
        'startdatestring': '3/24/17 12:00:00 PM',
        'enddatestring': '3/24/17 1:00:00 PM',
        'description': 'We believe in social, economic, and climate justice.',
        'location': '1 N. Cactus Ave. Green Bay, WI 54302',
        'group_id': 1,
        'rsvps': [
          {
            'id': 1,
            'user_id': 1,
            'event_id': 1,
            'attending': RsvpResponse['ATTENDING']
          }
        ]
      },
      {
        'id': 2,
        'name': 'Bloomington Peace Action Coalition Meeting Round 2',
        'startdatestring': '3/24/17 12:30:00 PM',
        'enddatestring': '3/24/17 2:00:00 PM',
        'description': 'Aint no stopping this train.',
        'location': '1 N. Cactus Ave. Green Bay, WI 54302',
        'group_id': 1,
        'rsvps': [
          {
            'id': 1,
            'user_id': 1,
            'event_id': 1,
            'attending': RsvpResponse['ATTENDING']
          }
        ]
      },
      {
        'id': 3,
        'name': 'Bloomington IWW Chapter Meeting',
        'startdatestring': '5/23/17 11:00:00 AM',
        'enddatestring': '5/23/17 2:00:00 PM',
        'description': 'Local chapter of Industrial Workers of the World, i.e., "The Wobblies." ',
        'location': '1 N. Cactus Ave. Green Bay, WI 54302',
        'group_id': 1,
        'rsvps': [
          {
            'id': 1,
            'user_id': 1,
            'event_id': 2,
            'attending': RsvpResponse['ATTENDING']
          }
        ]
      },
      {
        'id': 4,
        'name': 'Immigration reform strategy meeting.',
        'startdatestring': '3/29/17 1:30:02 AM',
        'enddatestring': '3/29/17 1:35:02 AM',
        'description': 'This it. We gonna do it.',
        'location': '1 N. Cactus Ave. Green Bay, WI 54302',
        'group_id': 1,
        'rsvps': [
          {
            'id': 1,
            'user_id': 2,
            'event_id': 3,
            'attending': RsvpResponse['ATTENDING']
          }
        ]
      },
      {
        'id': 5,
        'name': 'Penguin Clean',
        'startdatestring': '4/1/17 1:30:02 AM',
        'enddatestring': '4/1/17 1:50:02 AM',
        'description': 'Scrub dat oil offa da little swimmy birds that cant fly.',
        'location': 'The ocean.\n Ocean Place 02123',
        'group_id': 1,
        'rsvps': [
          {
            'id': 1,
            'user_id': 1,
            'event_id': 3,
            'attending': RsvpResponse['ATTENDING']
          },
          {
            'id': 2,
            'user_id': 1000,
            'event_id': 3,
            'attending': RsvpResponse['ATTENDING']
          },
          {
            'id': 3,
            'user_id': 1001,
            'event_id': 3,
            'attending': RsvpResponse['ATTENDING']
          },
          {
            'id': 4,
            'user_id': 1002,
            'event_id': 3,
            'attending': RsvpResponse['NOT_ATTENDING']
          }
        ]
      },
      {
        'id': 6,
        'name': 'Invisible event meeting',
        'startdatestring': '3/29/17 1:30:02 AM',
        'enddatestring': '3/29/17 4:30:02 AM',
        'description': 'If you see this there\'s a bug.',
        'location': '1 N. Cactus Ave. Green Bay, WI 54302',
        'group_id': 10000,
        'rsvps': [
          {
            'id': 1,
            'user_id': 1000,
            'event_id': 4,
            'attending': RsvpResponse['ATTENDING']
          }
        ]
      }
    ];
    this.events = [];
    events.forEach((ps_event) => {
      this.events.push(new EventModel(this, ps_event));
    });
  }

	// Function for testing
  updateEventRsvp = (event_id, uid, rsvpResponse) => {
    this.events.forEach((event) => {
      var hasRsvpd = false;
      var correctEvent = false;
      if (event.id === event_id) {
        correctEvent = true;
        event.rsvps.forEach((rsvp) => {
          if (rsvp.user_id === uid) {
            userHasRsvpd = true; 
            rsvp.attending = rsvpResponse;
            console.log('Updating rsvp');
          }
        });

        if (!hasRsvpd) { // we haven't rsvpd, push a new rsvp
          event.rsvps.push(new RSVPModel(this, 4, uid, event_id, rsvpResponse));
 				}
      }
    });
  }
}