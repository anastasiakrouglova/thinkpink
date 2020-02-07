import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UiStore {
  authUser = null;

  role = `Teamcaptain`;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.setUser(getUserFromCookie());
    console.log(this.setUser(getUserFromCookie()));
  }

  setUser = value => (this.authUser = value);

  login = (email, password) => {
    console.log('email is eigenlijk email');
    console.log(email);
    console.log(password);
    return this.authService
      .login(email, password)
      .then(() => {
        this.setUser(getUserFromCookie());
        Promise.resolve();
        console.log(this.setUser(getUserFromCookie()))
      })
      .catch(() => {
        this.setUser(null);
        Promise.reject();
      });
  };

  register = (name, surname, email, pwd, birthday, phoneNumber, tShirtSize) => this.authService.register(name, surname, email, pwd, birthday, phoneNumber, tShirtSize);

  logout = () => {
    this.authService.logout().then(() => this.setUser(null));
  };
}

decorate(UiStore, { authUser: observable, setUser: action });

export default UiStore;