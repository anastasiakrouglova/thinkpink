import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./LoginForm.module.css";

const formValid = ({ formErrors, ...rest}) => {
  let valid = true

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  })

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === `` && (valid = false)
  });

  return valid;
}

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ``, pwd: ``, pwd2: ``, name: ``, namePartner: ``,
      formErrors:  {email: ``, pwd: ``, pwd2: ``, name: ``, namePartner: ``} };
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
    let formErrors = this.state.formErrors;

    switch (input.name) {
      case `email`:
        formErrors.email = input.value.length < 5 && input.value.length > 0 ? `minimum 5 characters required` : ``;
        break;
      case `pwd`:
        formErrors.pwd = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
        break;
      case `pwd2`:
        formErrors.pwd2 = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
        break;
      default:
        break;
    }
    this.setState({formErrors, [input.name]: input.value})
  };

  handleSubmit = e => {
    e.preventDefault();

    const { uiStore, history } = this.props;
    const {name, namePartner, email, pwd} = this.state;

    if (formValid(this.state)) {
      uiStore.register(name, namePartner, email, pwd).then(() => {
        history.push(ROUTES.login);
      });
    }
  };

  render() {
    const { formErrors, name, namePartner, email, pwd, pwd2 } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              className={styles.inputfield}
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="namePartner" className={styles.label}>
            Name partner
            <input
              className={styles.inputfield}
              type="namePartner"
              name="namePartner"
              id="namePartner"
              value={namePartner}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              className={formErrors.email.length > 0 ? styles.inputfieldError : styles.inputfield}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span>{formErrors.email}</span>
            )}
          </label>
          <label htmlFor="pwd" className={styles.label}>
            Password
            <input
              className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
              type="password"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={this.handleChange}
            />
            {formErrors.pwd.length > 0 && (
              <span>{formErrors.pwd}</span>
            )}
          </label>
          <label htmlFor="pwd2" className={styles.label}>
            Repeat password
            <input
              className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
              type="password"
              name="pwd2"
              id="pwd2"
              ref={pwd2}
              onChange={this.handleChange}
            />
            {formErrors.pwd2.length > 0 && (
              <span>{formErrors.pwd2}</span>
            )}
          </label>
          <input
            className={styles.loginButton}
            type="submit"
            value="Register"
            disabled={pwd && pwd !== pwd2}
          />
        </form>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(RegisterForm));
