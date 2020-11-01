import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBView, MDBMask } from "mdbreact";

const Projects = () => {
  return (
    <section className="text-center my-5" id="projects">
        <h2 className="h1-responsive font-weight-bold my-5">
          My Projects
        </h2>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/assets/flixnut.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="http://flix-nut.herokuapp.com/" className="green-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon fab icon="github" />
                  Movie Tracker
                </h5>
              </a>
              <p>
              First Register as a new member with a valid email and password.
              Any future visits the user only needs to sign in.
              Next click the search button and search for any movie.
              Next rate the movie on a scale of 0-100.
              After the user will see their rating compared to other users.
              Finally click on the bat profile picture to log out.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="assets/Mars.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://jordanrbunnell.github.io/spaceexploration/" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon fab icon="github" />
                  Space Exploration
                </h5>
              </a>
              <p>
              As a space enthusiast I want to see cool facts about space.
              I want to be able to click on different topics and learn more about them.
              So that I can plan my collonization of Mars.
              I'd like to know the weather on Mars.
              I want to know if any asteroids are going to hit or pass near by the pale blue dot.

              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/assets/fitaf.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://fitaf.herokuapp.com/?id=5f9e2692de6c5b001735efbf" className="brown-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon fab icon="github" />
                  Fitness Tracker
                </h5>
              </a>
              <p>
              A way to track your workouts
              Able to enter resistance training and cardiovascular training
              Once the workout is completed you are able to see your last workout on the home page
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/assets/eatdaburger.png"
                alt=""
                className="img-fluid"
              />
              <a href="https://mvceatdaburger.herokuapp.com/burgers">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="cyan-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon fab icon="github" />
                  Eat Da Burger
                </h5>
              </a>
              <p>
              This is a web application to track the types of burgers a user has eaten. It was built on the client side using express handlebars and it is linked to a MySQL database
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Projects;