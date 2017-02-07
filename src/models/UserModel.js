import {observable} from 'mobx';

export default class UserModel {
  store;
  id;
	@observable name;
	@observable zipcode;

  constructor(store, id, name, zipcode) {
    this.store = store;
    this.id = id;
    this.name = name;
    this.zipcode = zipcode;
  }
}