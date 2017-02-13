import {observable, computed, reaction} from 'mobx';
import { RouterStore } from 'mobx-router'
import SignupFormStore from './ui/SignupFormStore';

export default class UiStore{
  constructor() {
    this.signupFormStore = new SignupFormStore({ root: this });
  }
}
