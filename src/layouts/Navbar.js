import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../assests/mylogo.png";
import pakflag from "../assests/pakflag.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function NavbarTool(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="xl" className="bg-darkgray mt-1 ">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="logo-img ms-5 text-white" />
        </NavbarBrand>
        {toggle ? (
          <button className="btn btn-outline-info ms-auto me-3 collapesbtn">
            Login
          </button>
        ) : null}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-5 mt-5" navbar>
            <NavItem className="dropdown">
              <NavLink className="ms-2 fw-bold text-white nav-items dropbtn">
                Payments
              </NavLink>
              <div className="dropdown-content p-4">
                <h6 className="mt-3 ms-4 mb-4 text-gary text-uppercase">
                  Accept Payments
                </h6>
                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/payment-gateway.ae837f84.svg"
                      alt=""
                    />{" "}
                    Payment Getway
                  </a>
                  <p className="ms-5 content-p">
                    Payment on your Website & App
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/payment-links.b311e082.svg"
                      alt=""
                    />{" "}
                    Payments Links
                  </a>
                  <p className="ms-5 content-p">
                    Create & Send links to collect money
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/payment-pages.eadf7c84.svg"
                      alt=""
                    />{" "}
                    Payments Pages
                  </a>
                  <p className="ms-5 content-p">
                    Get Paid with personalized page
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3 w-8"
                      src="	https://razorpay.com/build/browser/static/payment-buttons.74fc1e0f.svg"
                      alt=""
                    />{" "}
                    Payments Button
                  </a>
                  <p className="ms-5 content-p">
                    Create/Copy and collect in 5min
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/qr-code.90a31467.svg"
                      alt=""
                    />{" "}
                    QR Codes
                  </a>
                  <p className="ms-5 content-p">
                    Multi-features QR for your business
                  </p>
                </div>
              </div>
            </NavItem>
            <NavItem className="dropdown">
              <NavLink className="ms-2 fw-bold text-white nav-items">
                Banking+
              </NavLink>
              <div className="dropdown-content p-4">
                <h6 className="mt-3 ms-4 mb-4 text-gary text-uppercase">
                  Business banking plus
                </h6>
                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/x.b892a7d0.svg"
                      alt=""
                    />{" "}
                    RazarpayX
                  </a>
                  <p className="ms-5 content-p">
                    Business banking Supercharged for disruptors
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/vendor-payments.0f3e2549.svg"
                      alt=""
                    />{" "}
                    Vendor Payments
                  </a>
                  <p className="ms-5 content-p">
                    Automate vendor invoice and TDS payments
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/payouts.1298a79c.svg"
                      alt=""
                    />{" "}
                    Payouts
                  </a>
                  <p className="ms-5 content-p">24/7 Instant and Automated</p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3 w-8"
                      src="	https://razorpay.com/build/browser/static/payout-links.cf242520.svg"
                      alt=""
                    />{" "}
                    Payout Links
                  </a>
                  <p className="ms-5 content-p">
                    Send money with recipent acount details
                  </p>
                </div>

                <div className="">
                  <a href="#" className="fs-5 text-primary ms-1 ">
                    <img
                      className="bg-primary rounded-pill me-2 mt-3"
                      src="https://razorpay.com/build/browser/static/demo-nav-icon.8dadbb49.svg"
                      alt=""
                    />{" "}
                    View Live Demo
                  </a>
                  <p className="ms-5 content-p">
                    See RazarpayX in action,no sign up required
                  </p>
                </div>
              </div>
            </NavItem>
            <NavItem>
              <NavLink className="ms-2 fw-bold text-white nav-items">
                Line of credit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-2 fw-bold text-white nav-items">
                PayRoll
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-2 fw-bold text-white nav-items">
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-2 fw-bold text-white nav-items">
                Support
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-2 fw-bold text-white nav-items">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <img src={pakflag} alt="" className="pak-flag ms-3" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="btn btn-outline-info ms-3 me-3  ps-3 pe-3 pt-2 pb-2 text-white">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-info btn btn-light ps-3 pe-3 pt-2 pb-2 ms-3 me-3 signbtn">
                Sign Up <AiOutlineArrowRight className="ms-1" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTool;
