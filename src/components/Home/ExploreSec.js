import React from "react";
import { MdDone } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import lensimg from "../../assests/lensimg.png";
import { TbMathGreater } from "react-icons/tb";

const ExploreSec = () => {
  return (
    <div className="explore-sec">
      <div className="container p-5 mt-5">
        <h4 className="text-center fw-bold mt-5">
          Explore RazorpayX powered Business Banking
        </h4>
        <div className="blue-line m-auto mt-3"></div>
        {/*  */}
        <div class="container border border-dark p-5 mt-5">
          <div class="row">
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <h2 className="">
                Manage your company’s finances and supercharge your business
                banking with{" "}
              </h2>
              <ul className="mt-5">
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Open a fully
                  digital current account
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> Automate payables &
                  compliment payments
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" />
                  Simplify and track spends with Corporate cards
                </li>
                <li className="mt-3 fw-light">
                  <MdDone className="text-info me-3 fs-5" /> View financial
                  insights at a glance
                </li>
              </ul>
              <div className="">
                <button className="btn btn-primary mt-4 ps-5 pe-5 pt-2 pb-2 btn-explore-sec">
                  Sing up
                </button>
                <span className="btn btn-clip bg-info text-white">
                  <AiOutlineArrowRight className="ms-2" />
                </span>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <img
                src="https://razorpay.com/build/browser/static/x-graphic.b40f463e.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="explore-card">
        <div className="container  ">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 clip-card">
              <div
                className="card shadow"
                style={{ width: "21rem", height: "17rem" }}
              >
                <div className="card-body bg-darkgray">
                  <h3 className="card-title fw-bold">Payouts</h3>

                  <p className="card-text mt-4">
                    Make simple, reliable & secure payouts to bank accounts, UPI
                    IDs or wallets
                  </p>
                  <button className="btn btn-outline-primary fw-bold mt-4">
                    Know More <TbMathGreater />
                  </button>
                  <img src={lensimg} alt="" className="lensimg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-sm-10 clip-card">
              <div
                className="card shadow "
                style={{ width: "21rem", height: "17rem" }}
              >
                <div className="card-body bg-darkgray ">
                  <h3 className="card-title fw-bold">Payroll</h3>

                  <p className="card-text mt-4">
                    Set your payroll and compliances like TDS, ESIC, PT, & PF on
                    autopilot.
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
                <div className="card-body bg-darkgray">
                  <h3 className="card-title fw-bold">Current Account</h3>

                  <p className="card-text mt-4">
                    Current accounts for fast-growing businesses, supported by
                    the best-in-class technology
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
      <div className="faq container mt-5 text-center p-4">
        <p className="d-inline-flex fs-5">
          Check out the live demo to learn how RazorpayX works. No sign-up
          required!
        </p>
        <div className=" d-inline-flex ms-3">
          <button className="btn btn-primary mt-4 ps-5 pe-5 pt-2 pb-2 ">
            Check out the demo
            <AiOutlineArrowRight className="ms-2" />
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ExploreSec;
