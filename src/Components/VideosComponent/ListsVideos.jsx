import React, { Component, Fragment } from "react";
import "./Videos.styles.css";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";

class ListVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  //fetching videos from  firebase realtime database
  async componentDidMount() {
    let videosData = this.state.videos;
    await firebase
      .database()
      .ref("videos")
      .on("value", (data) => {
        data.forEach((video) => {
          videosData.push({
            id: video.key,
            url: video.val().url,
            video_title: video.val().video_title,
          });
        });
      });
  }

  render() {
    console.log(this.state.videos);
    let videoList = this.state.videos.map((video) => (
      <Fragment key={video.id}>
        <div>
          <video controls>
            <source src={video.url}></source>
          </video>
          <h1>{video.video_title}</h1>
        </div>
      </Fragment>
    ));
    return (
      <Fragment>
        <section className="videoBlock">
          <article>{videoList}</article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(ListVideos);
