import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="ftco-intro py-5 bg-primary">
        <div className="container4">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center mb-lg-4">
                  <h2 className="mb-0">
                    Newsletter - Stay tune and get the latest update
                  </h2>
                  <p>Far far away, behind the word mountains</p>
                </div>
                <div className="col-md-5 border-left d-flex align-items-center">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email address"
                      />
                      <a href="/" className="btn btn-darken">
                        Subscribe
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
