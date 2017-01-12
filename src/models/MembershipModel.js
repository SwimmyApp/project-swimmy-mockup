import {observable} from 'mobx';

export default class MembershipModel {
	store;
	id;
	user_id;
	group_id;
	@observable role;

	constructor(store, id, user_id, group_id, role) {
		this.store = store;
		this.id = id;
		this.user_id = user_id;
		this.group_id = group_id;
		this.role = role;
	}
}