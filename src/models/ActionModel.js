import {observable} from 'mobx';

export default class ActionModel {
  store;
  action_id;
	@observable name;

  constructor(store, {action_id, name}) {
    this.store = store;
    this.action_id = action_id;
    this.name = name;
  }
}
