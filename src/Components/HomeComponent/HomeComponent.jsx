import React, { Component, Fragment } from "react";
import "./HomeComponent.styles.css";
import { Link } from "react-router-dom";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let homePageStyles = {
      "background-color": "#000",
      "background-image":
        "linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
      "background-position": "right top",
      height: "100vh",
    };

    return (
      <Fragment>
        {/* container start here */}
        <section className="mainBlock" style={homePageStyles}>
          <div className="container">
            <div className="left">
              <h1 className="">Welcome to prime video</h1>
              <p>
                Join Prime to watch the latest movies, TV shows and
                award-winning Amazon Originals
              </p>
              <Link to="/register">Start your 30-day free trial</Link>
            </div>
            <div className="right">
              <img src="bg.jpg" alt="" />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;
