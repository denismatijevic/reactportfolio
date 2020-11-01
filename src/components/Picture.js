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
                <p className="dark-grey-text" id="about-me">
                Hi! My name is Denis and I am a junior full stack web developer. I grew up in Croatia and I moved to the United
                States in 2001. I currently live in Sandy, UT.
                <br />
                <br />
                My background is in finance and transportation, I am a stock broker. I hold the series 7, SIE, and the series 63
                licenses. I also hold an insurance license.
                I've always been fascinated with web design and the nitty griddy of it, so I figured that I should learn it and
                see what it looks like form a developers view point. I fell in love with it.
                <br />
                <br />
                I'm a country boy at heart and I love going out into nature and exploring the beautiful mountains Utah has. I am
                an avid hiker. I have a dog named Charlie, he is a GSP. He comes on a lot of adventures with me.
                <br />
                <br />
                Currently I am attending school at The University of Utah, I'm enrolled in their Full Stack Web Development bootcamp and I will be
                graduating in Fall of 2020.
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