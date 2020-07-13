import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    let { email } = this.state;
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      this.props.history.push("/login");
      toast.success(`please verify ${email} and change  password`);
    } catch (err) {
      toast.error(err.message);
      this.props.history.push("/password-reset");
    }
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img src="AV_Logo.png" alt="logo" className="inside_logo my-4" />

            <div className="card-body card">
              <h1 className="h4">Password assistance</h1>
              <p style={{ fontSize: "12px" }}>
                Enter the email address or mobile phone number associated with
                your Amazon account.
              </p>
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
                  <button className="a-button-primary btn-block my-4">
                    continue
                  </button>
                </div>

                <p style={{ fontSize: "12px" }}>
                  Has your email or mobile number changed? If you no longer use
                  the email address associated with your Amazon account, you may
                  contact Customer Service for help restoring access to your
                  account.
                </p>
                <hr />

                <p>
                  <Link to="/login">login</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(PasswordReset);
