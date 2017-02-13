export default class SignupFormStore {
  constructor({ root }) {
    this.root = root;

    this.name = '';
    this.email_address = '';
    this.password = '';
    this.phone = '';
  }
}
