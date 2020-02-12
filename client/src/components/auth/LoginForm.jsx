import React, { Component } from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./LoginForm.module.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === `` && (valid = false);
  });

  return valid;
};

const emailInput = React.createRef();
const pwdInput = React.createRef();

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ``,
      pwd: ``,
      formErrors: { email: ``, pwd: `` }
    };
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
    let formErrors = this.state.formErrors;

    switch (input.name) {
      case `email`:
        formErrors.email =
          input.value.length < 5 && input.value.length > 0
            ? `minimum 3 characters required`
            : ``;
        break;
      case `pwd`:
        formErrors.pwd =
          input.value.length < 3 && input.value.length > 0
            ? `minimum 3 characters required`
            : ``;
        break;
      default:
        break;
    }
    
    
    this.setState({ formErrors, [input.name]: input.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { uiStore, history } = this.props;

    console.log(uiStore);

    //const response = sendRegisterRequest(email, password);
    //const responseJson = await response.json();

      // if (response.status !== 200) {
      //     this.setState({error: reponseJson.error});
      // } else {
      //     // handle successful registration
      // }
    
    //console.log(uiStore.register(email));
    //console.log(emailInput.current.value)

    if (formValid(this.state)) {
      uiStore
        .login(emailInput.current.value, pwdInput.current.value)
        .then(() => {
          history.push(ROUTES.formwelcome);
        });
    }
  };

  render() {
    const { formErrors, email, pwd } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <div className="App-form-input-container">
            <label htmlFor="email" className={styles.label}>
              E-mailadres
            </label>
            <input
              required
              className={styles.inputfield}
              value={email}
              type="email"
              name="email"
              id="email="
              ref={emailInput}
              onChange={this.handleChange}
              placeholder="Johndoe@gmail.com"
            />
          </div>

          <div className="App-form-input-container">
            <label htmlFor="pwd" className={styles.label}>
              Wachtwoord
            </label>

            <input
              required
              className={
                formErrors.pwd.length > 0
                  ? styles.inputfieldError
                  : styles.inputfield
              }
              value={pwd}
              type="password"
              name="pwd"
              id="pwd"
              ref={pwdInput}
              onChange={this.handleChange}
              placeholder="*****"
            />
            {formErrors.pwd.length > 0 && <span>{formErrors.pwd}</span>}
          </div>
          <input className={styles.loginButton} type="submit" value="Log in" />
        </form>

        <p className={styles.signupContainer}>
          Nog geen account?{" "}
          <Link className={styles.signup} to={ROUTES.signup}>
            Sign up!
          </Link>
        </p>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(LoginForm));

// import React from "react";
// import { inject } from "mobx-react";
// import { withRouter } from "react-router-dom";
// import { ROUTES } from "../../constants";

// //import stylesForm from "../../styles/form.module.css";
// import styles from "./LoginForm.module.css";

// const LoginForm = ({ uiStore, history }) => {
//   const emailInput = React.createRef();
//   const pwdInput = React.createRef();

//   const handleSubmit = e => {
//     e.preventDefault();

//     uiStore
//       .login(emailInput.current.value, pwdInput.current.value)
//       .then(() => {
//         history.push(ROUTES.formwelcome);
//       });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} >
//         <div >
//           <label htmlFor="email" >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email="
//             ref={emailInput}
//           />
//         </div>
//         <div >
//           <label htmlFor="username" >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             ref={pwdInput}
//           />
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </>
//   );
// };

// export default inject(`uiStore`)(withRouter(LoginForm));
