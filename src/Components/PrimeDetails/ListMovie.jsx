import React, { Component, Fragment } from "react";
import AddMovieForm from "./AddMovieForm";
import { uuid } from "uuidv4";
class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addVideo = this.addVideo.bind(this);
  }

  renderVideo() {
    return (
      <Fragment>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>name</th>
              <th>genre</th>
              <th>rating</th>
              <th>language</th>
              <th>type</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((video) => (
              <tr>
                <td>{video.name}</td>
                <td>{video.genre}</td>
                <td>{video.rating}</td>
                <td>{video.language}</td>
                <td>{video.type}</td>
                <td>{video.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }

  addVideo(video) {
    let newVideo = { ...video, id: uuid() };
    this.setState((state) => ({
      items: [...state.items, newVideo],
    }));
  }
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          {this.state.items.length > 0 ? this.renderVideo() : ""}
        </div>
        <AddMovieForm addVideo={this.addVideo} />
      </Fragment>
    );
  }
}

export default ListMovie;
