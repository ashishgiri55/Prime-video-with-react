import React, { Component, Fragment } from "react";
class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      rating: "",
      language: "",
      type: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addVideo(this.state);
  }

  render() {
    return (
      <Fragment>
        <div className="container my-4">
          <div className="card">
            <h4 className="display-5 mt-3 ml-3 text-uppercase font-weight-bold text-left p-2">
              Add Movie
            </h4>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="enter name"
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="genre"
                      placeholder="enter genre"
                      required
                      value={this.state.genre}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <input
                      type="number"
                      className="form-control"
                      name="rating"
                      placeholder="enter rating"
                      required
                      value={this.state.rating}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="language"
                      placeholder="enter language"
                      required
                      value={this.state.language}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="type"
                      placeholder="enter video type"
                      required
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      placeholder="enter price"
                      required
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group ml-auto mr-3">
                    <button className="a-button-primary btn-block">
                      add Movie
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddMovieForm;
