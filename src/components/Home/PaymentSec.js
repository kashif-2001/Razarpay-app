import React, { Fragment } from "react";
import { MdDone } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";
import lensimg from "../../assests/lensimg.png";

const PaymentSec = () => {
  return (
    <Fragment>
      <div className="paymentsec container p-4">
        <h4 className="text-center mt-4 fw-bolder">
          Accept Payments with Razorpay Payment Suite
        </h4>
        <div className="blue-line m-auto mt-3"></div>
        <div className="container border border-secondary-subtle p-4 mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <h3 className="fw-bolder mt-5">
                Supercharge your business with the all ‑powerful
                <span className="text-primary lh-lg"> Payment Gateway</span>
              </h3>
              <ul className="mt-5 ">
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> 100+ Payment
                  Methods
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Industry Leading
                  Success Rate
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Superior Checkout
                  Experience
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Easy to Integrate
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Instant Settlements
                  from day 1
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> In-depth Reporting
                  and Insights
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <img
                src="https://razorpay.com/build/browser/static/payment-suite.c8ef898b.png"
                alt=""
                className="payment-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="payment-card">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 clip-card">
              <div className="card shadow" style={{ width: "21rem" }}>
                <div className="card-body">
                  <h3 className="card-title fw-bold">Payment Links</h3>

                  <p className="card-text mt-4">
                    Share payment link via an email, SMS, messenger, chatbot
                    etc. and get paid immediately
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>
                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 clip-card">
              <div className="card shadow " style={{ width: "21rem" }}>
                <div className="card-body ">
                  <h3 className="card-title fw-bold">Payment Pages</h3>

                  <p className="card-text mt-4">
                    Take your store online instantly with zero coding. Accept
                    international & domestic payments
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>

                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 clip-card">
              {" "}
              <div className="card shadow" style={{ width: "21rem" }}>
                <div className="card-body">
                  <h3 className="card-title fw-bold">Payment Buttons</h3>

                  <p className="card-text mt-4">
                    Create, Copy & Collect With Payment Button. Collect one time
                    or subscription payments & more
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>

                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 mt-5 clip-card">
              <div className="card shadow" style={{ width: "21rem" }}>
                <div className="card-body">
                  <h3 className="card-title fw-bold">Subscriptions</h3>

                  <p className="card-text mt-4">
                    Subscription plans with automated recurring transactions on
                    various payment modes.
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>
                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 mt-5 clip-card">
              <div className="card shadow " style={{ width: "21rem" }}>
                <div className="card-body ">
                  <h3 className="card-title fw-bold">Route</h3>

                  <p className="card-text mt-4">
                    Split incoming payments automatically to vendor’s accounts,
                    manage marketplace money flow...
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>

                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 mt-5 clip-card">
              {" "}
              <div className="card shadow" style={{ width: "21rem" }}>
                <div className="card-body">
                  <h3 className="card-title fw-bold">Smart Collect</h3>

                  <p className="card-text mt-4">
                    Automatically reconcile incoming NEFT, RTGS, IMPS, UPI
                    payments using Customer Identifiers & UPI-IDs
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>

                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq container mt-5 text-center">
        <h5 className="d-inline-flex pt-3 fw-bold">
          Not sure which product to choose?
        </h5>
        <p className="d-inline-flex">
          Answer a few questions and we’ll help you out
        </p>
        <a href="" className="ms-2 btn btn-outline-primary text-primary ">
          Find me a product
          <TbMathGreater className="ms-1" />
        </a>
      </div>
    </Fragment>
  );
};

export default PaymentSec;
