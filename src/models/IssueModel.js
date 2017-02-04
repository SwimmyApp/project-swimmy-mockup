import {observable} from 'mobx';

export default class IssueModel {
  store;
  issue_id;
	@observable name;

  constructor(store, {issue_id, name}) {
    this.store = store;
    this.issue_id = issue_id;
    this.name = name;
  }
}
