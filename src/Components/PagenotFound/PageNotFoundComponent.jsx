import React, { Fragment } from "react";

const PageNotFoundComponent = () => {
  return (
    <div>
      <Fragment>
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <p style={{ color: "red", fontSize: "30px" }}>Oops page not Found</p>
          <h1 style={{ color: "red", fontSize: "100px" }}>404</h1>
        </div>
      </Fragment>
    </div>
  );
};

export default PageNotFoundComponent;
