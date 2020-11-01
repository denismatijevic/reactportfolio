import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "./footer.css";
import "../index.css"

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Contact</h5>
            <p>
              Denis Matijevic
              <br />
              801-809-9105
              <br />
              denisone90@gmail.com
              <br />
              <a href="https://github.com/denismatijevic">
              github.com/denismatijevic
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Denis Matijevic </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;