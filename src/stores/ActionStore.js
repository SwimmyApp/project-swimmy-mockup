import {observable, computed, reaction} from 'mobx';
import ActionModel from '../models/ActionModel';

export default class ActionStore {
    @observable actions = [];

  constructor({ root }) {
    this.root = root;
    let actions = [
      {
        action_id: 1,
        name: 'Call your representatives'
      },
      {
        action_id: 2,
        name: 'Register new voters'
      },
      {
        action_id: 3,
        name: 'Knock on doors'
      },
      {
        action_id: 4,
        name: 'Call your neighbors'
      },
      {
        action_id: 5,
        name: 'Attend an organizing meeting'
      },
      {
        action_id: 6,
        name: 'Eat Pizza'
      }
    ];

    this.actions = [];
    actions.forEach((action) => {
      this.actions.push(new ActionModel(this, action));
    });
  }
}
