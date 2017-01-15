import {observable, computed, reaction} from 'mobx';
import { RouterStore } from 'mobx-router'
import UserStore from './UserStore';
import GroupStore from './GroupStore';

//see jeffijoe's comment, Sep 2 2016, as an example:
//https://github.com/mobxjs/mobx/issues/300



export default class RootStore {
	constructor() {
		this.userStore = new UserStore({ root: this});
		this.groupStore = new GroupStore({ root: this});
		this.router = new RouterStore({ root: this });
	}
}
