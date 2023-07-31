import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              © , made with <i className="fa fa-heart" /> by
              <a
                href={process.env.CREATOR_LINK}
                className="font-weight-bold"
                target="_blank"
              >
                {" "}
                {process.env.CREATOR_NAME}{" "}
              </a>
              for a better web.
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              {[].map((nav) => (
                <li key={nav} className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    Title
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
