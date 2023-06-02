import React from "react";

const Features = () => {
  return (
    <div className="features text-white">
      <div className="continer">
        <h4 className="text-center text-white fw-bolder">Features</h4>
        <div className="blue-line m-auto mt-3"></div>
        <p className="text-center w-50 m-auto mt-4 text-white lead">
          Empower your business with all the right tools to accept online
          payments and provide the best customer experience
        </p>
        {/* feature grid  */}
        <div class="container mt-5">
          <div class="row">
            <div class="col-12 col-lg-3 col-md-4 col-sm-6">
              <img
                src="	https://razorpay.com/build/browser/static/instant-activation.6f975aa6.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Instant Activation</h4>
              <p className="w-85">
                Get activated and transact within 2 minutes. Completely online
                onboarding with minimum documentation.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 col-sm-6">
              <img
                src="https://razorpay.com/build/browser/static/easy-integration.18651e2f.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Easy Integration</h4>
              <p className="w-85">
                With plugins for all major platforms and languages, integrate
                and go live with Razorpay in less than an hour.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 col-sm-6">
              <img
                src="	https://razorpay.com/build/browser/static/api-driven.207572da.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">API Driven</h4>
              <p className="w-85">
                Build your business for scale with our complete API-driven
                automation that requires zero manual intervention.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 col-sm-6">
              <img
                src="https://razorpay.com/build/browser/static/payment-modes.da25e039.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">100+ payment modes</h4>
              <p className="w-85">
                Offer your customers the luxury of all payment modes including
                Credit/Debit cards, Netbanking, UPI, Wallets etc.
              </p>
            </div>
            {/* second row of gird */}
            <div class="col-12 col-lg-3 col-md-4 mt-4 col-sm-6">
              <img
                src="	https://razorpay.com/build/browser/static/simple-pricing.dc58cdbb.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Simple Pricing</h4>
              <p className="w-85">
                Our innovative payment solutions with competitive pricing make
                payments simpler.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 mt-4 col-sm-6">
              <img
                src="	https://razorpay.com/build/browser/static/support.714ccbce.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Instant Activation</h4>
              <p className="w-85">
                Always available email, phone and chat based support to help you
                in your every step.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 mt-4 col-sm-6">
              <img
                src="https://razorpay.com/build/browser/static/dashboard-reporting.15590378.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Dashboard Reporting</h4>
              <p className="w-85">
                Real-time data and insights on your Razorpay Dashboard to make
                informed business decisions.
              </p>
            </div>
            <div class="col-12 col-lg-3 col-md-4 mt-4 col-sm-6">
              <img
                src="	https://razorpay.com/build/browser/static/secure.742a33ac.svg"
                alt=""
                className=""
              />
              <h4 className="mt-4">Secure</h4>
              <p className="w-85">
                PCI DSS Level 1 compliant solution which removes your burden of
                regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
