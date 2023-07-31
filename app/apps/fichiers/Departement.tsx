import React from "react";

export function Departement({}) {
  return (
    <>
      <h5 className="font-size-16 me-3 mb-0 ">Departement</h5>
      <div className="row mt-1">
        <div className="col-xl-4 col-sm-6">
          <div className="card shadow-none border">
            <div className="card-body p-3">
              <div>
                <div className="dropdown float-end">
                  <a
                    className="text-muted dropdown-toggle font-size-16"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i className="bx bx-dots-vertical-rounded font-size-20" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="avatar align-self-center me-3">
                    <div className="avatar-title rounded bg-soft-primary text-primary font-size-24">
                      <i className="mdi mdi-google-drive" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-size-15 mb-1">Google Drive</h5>
                    <a className="font-size-13 text-muted">
                      <u>View Folder</u>
                    </a>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <div className="d-flex justify-content-between">
                    <p className="text-muted font-size-13 mb-1">20GB</p>
                    <p className="text-muted font-size-13 mb-1">50GB used</p>
                  </div>
                  <div className="progress animated-progess custom-progress">
                    <div
                      className="progress-bar bg-gradient bg-primary"
                      role="progressbar"
                      style={{
                        width: "90%",
                      }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={90}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-xl-4 col-sm-6">
          <div className="card shadow-none border">
            <div className="card-body p-3">
              <div className>
                <div className="dropdown float-end">
                  <a
                    className="text-muted dropdown-toggle font-size-16"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i className="bx bx-dots-vertical-rounded font-size-20" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="avatar align-self-center me-3">
                    <div className="avatar-title rounded bg-soft-info text-info font-size-24">
                      <i className="mdi mdi-dropbox" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-size-15 mb-1">Dropbox</h5>
                    <a href className="font-size-13 text-muted">
                      <u>View Folder</u>
                    </a>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <div className="d-flex justify-content-between">
                    <p className="text-muted font-size-13 mb-1">20GB</p>
                    <p className="text-muted font-size-13 mb-1">50GB used</p>
                  </div>
                  <div className="progress animated-progess custom-progress">
                    <div
                      className="progress-bar bg-gradient bg-info"
                      role="progressbar"
                      style={{
                        width: "90%",
                      }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={90}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-xl-4 col-sm-6">
          <div className="card shadow-none border">
            <div className="card-body p-3">
              <div className>
                <div className="dropdown float-end">
                  <a
                    className="text-muted dropdown-toggle font-size-16"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i className="bx bx-dots-vertical-rounded font-size-20" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="avatar align-self-center me-3">
                    <div className="avatar-title rounded bg-soft-primary text-primary font-size-24">
                      <i className="mdi mdi-apple-icloud" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-size-15 mb-1">One Drive</h5>
                    <a href className="font-size-13 text-muted">
                      <u>View Folder</u>
                    </a>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <div className="d-flex justify-content-between">
                    <p className="text-muted font-size-13 mb-1">20GB</p>
                    <p className="text-muted font-size-13 mb-1">50GB used</p>
                  </div>
                  <div className="progress animated-progess custom-progress">
                    <div
                      className="progress-bar bg-gradient bg-primary"
                      role="progressbar"
                      style={{
                        width: "90%",
                      }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={90}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
      </div>
    </>
  );
}
