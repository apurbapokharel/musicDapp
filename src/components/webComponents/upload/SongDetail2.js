import React, { Component } from "react";
import "./SongDetail2.css";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SongDetail2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // firstName: null,
      // lastName: null,
      // email: null,
      // password: null,
      songTitle: null,
      singerName: null,
      producerName: null,
      costPerDownload: null,
      costPerStream: null,

      formErrors: {
        // firstName: "",
        // lastName: "",
        // email: "",
        // password: ""
        songTitle: '',
        singerName: '',
        producerName: '',
        costPerDownload: '',
        costPerStream: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Title: ${this.state.title}
        Singer: ${this.state.singerName}
        Producer: ${this.state.producerName}
        Download Cost: ${this.state.costPerDownload}
        streamCost: ${this.state.costPerStream}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "singerName":
        formErrors.singerName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

        case "producerName":
          formErrors.producerName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;

      // case "email":
      //   formErrors.email = emailRegex.test(value)
      //     ? ""
      //     : "invalid email address";
      //   break;
      // case "password":
      //   formErrors.password =
      //     value.length < 6 ? "minimum 6 characaters required" : "";
      //   break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Song Detail</h1>
          <form onSubmit={this.handleSubmit} noValidate>

            <div className="title">
              <label htmlFor="songTitle">Title</label>
              <input 
                type="text"
                name="songTitle"
                placeholder="song title"
                noValidate
                onChange={this.handleChange}
              />
                {formErrors.songTitle.length > 0 && (
                <span className="errorMessage">{formErrors.songTitle}</span>
              )}
            </div>

            <div className="singer">
              <label htmlFor="singerName" style={{}}>Singer</label>
              <input
                className={formErrors.singerName.length > 0 ? "error" : null}
                placeholder="singer name"
                type="text"
                name="singerName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.singerName.length > 0 && (
                <span className="errorMessage">{formErrors.singerName}</span>
              )}
            </div>

            <div className="producer">
              <label htmlFor="produecerName">Producer</label>
              <input
                className={formErrors.producerName.length > 0 ? "error" : null}
                placeholder="producer name"
                type="text"
                name="produecerName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.producerName.length > 0 && (
                <span className="errorMessage">{formErrors.producerName}</span>
              )}
            </div>

            <div className="download">
              <label htmlFor="downloadCost">Cost per download</label>
              <input
                // className={formErrors.downloadCost.length > 0 ? "error" : null}
                placeholder="no. of tokens"
                type="number"
                min="0"
                name="downloadCost"
                noValidate
                onChange={this.handleChange}
              />
              {/* {formErrors.downloadCost.length > 0 && (
                <span className="errorMessage">{formErrors.downloadCost}</span>
              )} */}
            </div>

            <div className="stream">
              <label htmlFor="streamCost">Cost per stream</label>
              <input
                // className={formErrors.streamCost.length > 0 ? "error" : null}
                placeholder="no. of tokens"
                type="number"
                min="0"
                name="streamCost"
                noValidate
                onChange={this.handleChange}
              />
              {/* {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.streamCost}</span>
              )} */}
            </div>

            {/* <div className="email">
              <label htmlFor="title">Title</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="song title"
                type="text"
                name="title"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div> */}

            {/* <div className="firstName">
              <label htmlFor="firstName" style={{}}>First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div> */}

            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SongDetail2;