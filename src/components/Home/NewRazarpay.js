import React from "react";
import { GiElectric } from "react-icons/gi";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillMenuButtonFill, BsQrCode } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const NewRazarpay = () => {
  return (
    <div className="new_razarpay-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 ">
            <h1 className="fw-bolder w-75 lh-base">
              New in the <span className="text-primary ">Razorpay</span> Product
              Suite
            </h1>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 pad-hover-card">
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body shadow-lg p-4 ps-5">
                <GiElectric className="fs-1 bg-primary text-white rounded-pill mt-3" />
                <h5 className="card-title fw-bolder mt-4">
                  Instant Settlements
                </h5>
                <p className="card-text">
                  Settle your customer payments within 10 seconds as soon your
                  account is activated, even during holidays.
                </p>
                <div className="btn btn-primary">
                  Know More <AiOutlineArrowRight className="ms-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 pad-hover-card ">
            <div className="card" style={{ width: "20rem", height: "312px" }}>
              <div className="card-body shadow-lg p-4 ps-5">
                <GiElectric className="fs-1 bg-primary text-white rounded-pill mt-3" />
                <h5 className="card-title fw-bolder mt-4">UPI autoPay</h5>
                <p className="card-text">
                  Allow customers to set up recurring payments using UPI Apps.
                </p>
                <div className="btn btn-primary mt-4">
                  Know More <AiOutlineArrowRight className="ms-2" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 pad-hover-card  mt-4">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "312px",
              }}
            >
              <div className="card-body shadow-lg p-4 ps-5">
                <BsFillMenuButtonFill className="fs-1 bg-primary text-white rounded-pill mt-3" />
                <h5 className="card-title fw-bolder mt-4">Payment Button</h5>
                <p className="card-text">
                  Accept payments on your website, in less than 5 minutes. No
                  developer needed.
                </p>
                <div className="btn btn-primary mt-4">
                  Know More <AiOutlineArrowRight className="ms-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 pad-hover-card mt-4">
            <div className="card" style={{ width: "20rem", height: "312px" }}>
              <div className="card-body shadow-lg p-4 ps-5">
                <BsQrCode className="fs-1 bg-primary text-white rounded-pill mt-3" />
                <h5 className="card-title fw-bolder mt-4">QR code</h5>
                <p className="card-text">
                  Create unlimited QR codes with business branding and start
                  accepting payments for free*.
                </p>
                <div className="btn btn-primary mt-4">
                  Know More <AiOutlineArrowRight className="ms-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-10 pad-hover-card mt-4">
            <div className="card" style={{ width: "20rem", height: "312px" }}>
              <div className="card-body shadow-lg p-4 ps-5">
                <FiShoppingCart className="fs-1 bg-primary text-white rounded-pill mt-3" />
                <h5 className="card-title fw-bolder mt-4">Magic Checkout</h5>
                <p className="card-text">
                  Improve your order conversion rates & reduce
                  return-to-origins. Boost your business by 20%!
                </p>
                <div className="btn btn-primary mt-4">
                  Know More <AiOutlineArrowRight className="ms-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRazarpay;
