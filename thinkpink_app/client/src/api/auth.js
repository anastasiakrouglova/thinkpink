class Auth {
    login = (email, password) => {
      return fetch(`http://localhost:4000/auth/login`, {
        method: `POST`,
        headers: {
          "content-type": `application/json`
        },
        body: JSON.stringify({
          email,
          password
        })
      }).then(res => {
        if (res.status === 200) {
          Promise.resolve();
        } else {
          Promise.reject();
        }
      });
    };
  
    logout = () => {
      return fetch(`http://localhost:4000/auth/logout`, {
        method: `POST`,
        headers: {
          "content-type": `application/json`
        }
      });
    };
  
    register = (name, surname, email, password) => {
      return fetch(`http://localhost:4000/auth/register`, {
        method: `POST`,
        headers: {
          "content-type": `application/json`
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password
        })
      }).then(res => {
        if (res.status === 200) {
          Promise.resolve();
        } else {
          Promise.reject();
        }
      });
    };
  }
  
  export default Auth;
  
  