import { observable, computed, reaction } from 'mobx';
import { RouterStore } from 'mobx-router'
import GroupStore from './GroupStore';
import UiStore from './UiStore';
import IssueStore from './IssueStore';
import UserStore from './UserStore';

//see jeffijoe's comment, Sep 2 2016, as an example:
//https://github.com/mobxjs/mobx/issues/300



export default class RootStore {
  constructor() {
    this.issueStore = new IssueStore({ root: this });
    this.userStore = new UserStore({ root: this });
    this.groupStore = new GroupStore({ root: this });
    this.router = new RouterStore({ root: this });
    this.uiStore = new UiStore({ root: this });
  }
}
