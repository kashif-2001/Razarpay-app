import React, { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import PaymentSec from "./PaymentSec";
import ExploreSec from "./ExploreSec";
import NewRazarpay from "./NewRazarpay";
import Features from "./Features";

const Home = () => {
  return (
    <Fragment>
      <div className="home bg-darkgray">
        <div class="container bg-darkgray">
          <div class="row ">
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 text-white p-5">
              <h1 className="w-80 fw-bold mt-5">
                Power your finance, grow your business
              </h1>
              <div className="blue-line"></div>
              <p className="mt-5 fs-5 fw-semibold text-gray">
                Accept payments from customers. Automate payouts to vendors &
                employees. Never run out of working capital.
              </p>
              <button className="btn btn-primary ps-4 pe-4 pt-3 pb-3 mt-5">
                Sign up Now <AiOutlineArrowRight className="ms-3" />
              </button>
            </div>
            <div class="col-12 col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://razorpay.com/build/browser/static/home-desktop.4a9233fc.jpg"
                alt=""
                className="w-100 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Home Compnonets */}
      <div className="">
        <PaymentSec />
      </div>
      <div className="">
        <ExploreSec />
      </div>
      <div className="">
        <NewRazarpay />
      </div>
      <div className="">
        <Features />
      </div>
      {/*  */}
      <div className="p-5 h-50" style={{ backgroundColor: "#F4F8FF" }}>
        <div className="container p-5">
          <div className="row ms-5">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 ">
              <h4 className="fw-bolder w-90">
                Join the 50,00,000 businesses using Razorpay
              </h4>
              <div className="blue-line "></div>
              <p className=" mt-3">
                We make it easier for you to focus on building great products
                while we work on simplifying your payments. Become one of us by
                joining thousands of our happy users and simplify the online
                payment experience for your customers.
              </p>
              <p>
                Focus on your business while we handle the complexities of
                payments for you.
              </p>
              <div className="btn btn-outline-primary mt-3 ps-3 pe-3 pt-3 pb-3">
                Get Started <AiOutlineArrowRight className="ms-2 mb-1" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <marquee
                scrolldelay="50"
                behavior=""
                direction="up"
                className="h-50"
              >
                <img
                  src="https://razorpay.com/build/browser/static/merchants.204d7741.png"
                  alt=""
                  className="w-100 marque-img"
                />
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
