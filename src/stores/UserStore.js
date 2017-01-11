import {observable, computed, reaction} from 'mobx';
import UserModel from '../models/UserModel'

export default class UserStore {
	@observable user = {};

	constructor() {
		//eventually we'll get this data asynchronously from server
		this.user = new UserModel(this, 1, 'Jane Doe', '37201');
	}

	test() {
		return true;
	}
}