import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css";

const Footer = () => {

    return (
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Maryanne Heinbaugh</h6>
                        <p>
                            <a href="https://github.com/2Endeavor"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
                        <p>
                            <a href="https://www.linkedin.com/in/6sigmablackbelt/"><i className="fab fa-linkedin mr-3" /></a> Washington, USA
            </p>

                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="4" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Cullan Aoki</h6>
                        <p>
                            <a href="https://github.com/ckaoki"><i className="fab fa-github-square mr-3" /></a>Full Stack Web Developer
            </p>
                        <p>
                            <a href="https://www.linkedin.com/in/cullan-aoki-5583b292/><i className="fab fa-linkedin mr-3" /></a> Washington, USA
            </p>

                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Joe Hutchinson</h6>
                        <p>
                            <a href="https://github.com/JoeLearns2Code"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
                        <p>
                            <a href="https://www.linkedin.com/in/joe-hutchinson-996920173/><i className="fab fa-linkedin mr-3" /></a> Washington, USA
            </p>

                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Iman Gure</h6>
                        <p>
                            <a href="https://github.com/"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
                        <p>
                            <a href="https://www.linkedin.com/in//"><i className="fab fa-linkedin mr-3" /></a>Washington, USA
            </p>

                    </MDBCol>

                </MDBRow>
                <hr />
                <MDBRow className="d-flex align-items-center">
                    <MDBCol md="12" lg="12">
                        <p className="text-center text-md-left grey-text">
                            &copy; {new Date().getFullYear()} Copyright {" "}
                            <a href="https://github.com/ImanGurey/Project-3--Schedule2Work" className="title"> <b><em>Schedule2Work</em></b></a>
                        </p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;
