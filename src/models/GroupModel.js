import {observable} from 'mobx';
import MembershipModel from './MembershipModel';

export default class GroupModel {
  store;
  id;
	@observable name;
	@observable description;
	@observable zipcode;
	@observable memberships = [];
	@observable issues;
	//TODO: should we include a tagline to be shown in the group search view?

  constructor(store, {id, name, description, zipcode, memberships, issues}) {
    this.store = store;
    this.id = id;
    this.name = name;
    this.description = description;
    this.zipcode = zipcode;
		//For now, issues are a fixed entity. In the future, we might allow custom issues, in which case, 
		//issues would need their own model with observables, since text could change when a user edits.
    this.issues = issues; 
    memberships.map((membership) => {
			//TODO: need to think about the appropriate store here. As is, it's pointing to the group store, since we're
			//instantiating from there. We don't want to instantiate a new membership store for every group, obviously.
			//So the underlying assumption here is that if a membership is changed in the app, for instance, the user
			//leaving a group, the call to the server would come from the group store rather than a membership store.
      this.memberships.push(new MembershipModel(this.store, membership.id, membership.user_id, membership.group_id, membership.role));
    });
  }
}