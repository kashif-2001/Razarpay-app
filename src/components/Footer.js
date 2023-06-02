import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mt-5 me-5 ">
        <div className="row">
          <div className="col">
            <img
              src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg"
              alt=""
              className="w-40"
            />
            <p className="mt-3 text-gray">
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
          </div>
          <div className="col">
            <h5 className="text-uppercase">Banking plus</h5>
            <p className="footer-p mt-3">RazarpayX</p>
            <p className="footer-p">Current Account</p>
            <p className="footer-p">Payouts</p>
            <p className="footer-p">Payout Links</p>
            <p className="footer-p">Corporate Credit Card</p>
            <p className="footer-p">
              View Live Demo{" "}
              <span className="bg-success text-white ps-1 pe-1 rounded">
                NEW
              </span>
            </p>
          </div>
          <div className="col">
            <h5 className="text-uppercase">Accept Payments</h5>
            <p className="footer-p mt-3">Payment Gateway</p>
            <p className="footer-p">Payment Pages</p>
            <p className="footer-p">Payment Links</p>
            <p className="footer-p">QR Codes</p>
            <p className="footer-p">Subcriptions</p>
            <p className="footer-p">Smart Collect</p>
          </div>
          <div className="col">column</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
