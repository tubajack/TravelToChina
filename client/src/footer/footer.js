import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              This application is for those who are interested in visiting China or learning more about the country. 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">More information about China</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.cia.gov/library/publications/the-world-factbook/geos/ch.html">The World Factbook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html">
                  US Department of State- Travel to China Advisory
                </a>
              </li>
              <li className="list-unstyled">
                <a href="http://www.chinauncensored.tv/">A comedic site about China</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.travelchinaguide.com/">Another good site about traveling to China</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} App written by: Jackson A. Henry
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;