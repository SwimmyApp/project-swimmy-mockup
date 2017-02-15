import {observable, computed, reaction} from 'mobx';
import IssueModel from '../models/IssueModel';

export default class IssueStore {
    @observable issues = [];

  constructor({ root }) {
    this.root = root;
    let issues = [
      {
        issue_id: 1,
        name: 'Health care'
      },
      {
        issue_id: 2,
        name: 'Immigration rights'
      },
      {
        issue_id: 3,
        name: 'Voting rights'
      },
      {
        issue_id: 4,
        name: 'Income inequality'
      },
      {
        issue_id: 5,
        name: 'Racial justice'
      },
      {
        issue_id: 6,
        name: 'Women\'s rights'
      }
    ];

    this.issues = [];
    issues.forEach((issue) => {
      this.issues.push(new IssueModel(this, issue));
    });
  }
}
