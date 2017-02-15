import {observable} from 'mobx';

export default class IssueModel {
  store;
  issue_id;
  name;

  constructor(store, {issue_id, name}) {
    this.store = store;
    this.issue_id = issue_id;
    this.name = name;

    this.getId = () => {
      return this.issue_id;
    }

    this.getName = () => {
      return this.name;
    }
  }
}
