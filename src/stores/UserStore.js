import {observable, computed, reaction} from 'mobx';
import UserModel from '../models/UserModel'

export default class UserStore {
	@observable user = {};

	constructor({ root }) {
		this.root = root;
		//eventually we'll get this data asynchronously from server
		this.user = new UserModel(this, 1, 'Jane Doe', '47401');
	}
}