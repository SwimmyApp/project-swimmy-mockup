import {observable} from 'mobx';

export default class RSVPModel {
  store;
  id;
  user_id;
  event_id;
	@observable attending;

  constructor(store, id, user_id, event_id, attending) {
    this.store = store;
    this.id = id;
    this.user_id = user_id;
    this.event_id = event_id;
    this.attending = attending;
  }
}

export const RsvpResponse = {ATTENDING:'Attending', NOT_ATTENDING:'Not Attending', INTERESTED:'Interested'}
