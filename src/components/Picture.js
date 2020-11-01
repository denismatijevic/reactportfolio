// import React from "react";
// import "../index.css";

// function Picture() {
//   return (
//     <div className="col-md-3 col-sm-9 responsive">
//       <img src="/assets/DenisSuit.png" alt="lookin fancy" id="about-me-pic" />
//     </div>
//   );
// }

// export default Picture;
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import "../index.css";

const Picture = () => {

  return (
    <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Hello, I'm Denis
          </h2>
          <MDBRow>
            <MDBCol lg="6" md="12">
              <div style={{}}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid" id="about-me-pic"
                    src="/assets/DenisSuit.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
              </div>
              <div style={{}}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div style={{}}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                      <a href="#!">
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol lg="6" md="12">
              <div style={{

              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                </div>
                <p className="dark-grey-text">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae.
                </p>
              </div>
              <div style={{
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                      <a href="#!">
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div style={{
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                      <a href="#!">
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      </MDBCol>
                      <a href="#!">
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Picture;