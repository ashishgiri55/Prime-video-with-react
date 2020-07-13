import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    let { email, password } = this.state;
    e.preventDefault();
    try {
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified) {
        this.props.history.push("/");
        let message = "successfully logged in";
        toast.success(message);
      } else {
        let message = `${email} is not yet verified please check your ${email} and verify`;
        toast.error(message);
      }
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img src="AV_Logo.png" alt="logo" className="inside_logo my-4" />

            <div className="card-body card">
              <h1 className="h4">Sign-In</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    Email (phone for mobile accounts)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <span className="float-right">
                    <Link to="/password-reset">Forgot Password?</Link>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    Sign-In
                  </button>
                </div>

                <p style={{ fontSize: "12px" }}>
                  By continuing, you agree to Amazon's Conditions of Use and
                  Privacy Notice.
                </p>
                <hr />
                <span>New to Amazon? </span>

                <p>
                  <Link to="/register">create your amazon account</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Login);
