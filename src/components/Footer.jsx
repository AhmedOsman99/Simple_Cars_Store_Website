import React from "react";

export function Footer() {
  return (
    <footer className="bg-dark text-center text-light text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt"></i> Address: 123 Main St,
                Anytown, USA
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email: info@carstore.com
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: +1 555-123-4567
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">FAQ</a>
              </li>
              <li>
                <a href="#!">Terms and Conditions</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Car Store. All rights reserved.
      </div>
    </footer>
  );
}
