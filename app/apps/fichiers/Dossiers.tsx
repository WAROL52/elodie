import React from "react";

export function Dossiers({}) {
  return (
    <>
      <div className="d-flex flex-wrap">
        <h5 className="font-size-16 me-3">Dossiers</h5>
        <div className="ms-auto">
          <a className="fw-medium text-reset">Nouveau Dossier</a>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-xl-4 col-sm-6">
          <div className="card shadow-none border">
            <div className="card-body p-3">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bx bxs-folder h1 mb-0 text-warning" />
                  </div>
                  <div className="avatar-group">
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt
                          className="rounded-circle avatar-sm"
                        />
                      </a>
                    </div>
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt
                          className="rounded-circle avatar-sm"
                        />
                      </a>
                    </div>
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <div className="avatar-sm">
                          <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                            A
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="overflow-hidden me-auto">
                    <h5 className="font-size-15 text-truncate mb-1">
                      <a href="javascript: void(0);" className="text-body">
                        Analytics
                      </a>
                    </h5>
                    <p className="text-muted text-truncate mb-0">12 Files</p>
                  </div>
                  <div className="align-self-end ms-2">
                    <p className="text-muted mb-0 font-size-13">
                      <i className="mdi mdi-clock" /> 15 min ago
                    </p>
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
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bx bxs-folder h1 mb-0 text-warning" />
                  </div>
                  <div className="avatar-group">
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt
                          className="rounded-circle avatar-sm"
                        />
                      </a>
                    </div>
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt
                          className="rounded-circle avatar-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="overflow-hidden me-auto">
                    <h5 className="font-size-15 text-truncate mb-1">
                      <a href="javascript: void(0);" className="text-body">
                        Sketch Design
                      </a>
                    </h5>
                    <p className="text-muted text-truncate mb-0">235 Files</p>
                  </div>
                  <div className="align-self-end ms-2">
                    <p className="text-muted mb-0 font-size-13">
                      <i className="mdi mdi-clock" /> 23 min ago
                    </p>
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
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bx bxs-folder h1 mb-0 text-warning" />
                  </div>
                  <div className="avatar-group">
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <div className="avatar-sm">
                          <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                            K
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="avatar-group-item">
                      <a href="javascript: void(0);" className="d-inline-block">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar5.png"
                          alt
                          className="rounded-circle avatar-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="overflow-hidden me-auto">
                    <h5 className="font-size-15 text-truncate mb-1">
                      <a href="javascript: void(0);" className="text-body">
                        Applications
                      </a>
                    </h5>
                    <p className="text-muted text-truncate mb-0">20 Files</p>
                  </div>
                  <div className="align-self-end ms-2">
                    <p className="text-muted mb-0 font-size-13">
                      <i className="mdi mdi-clock" /> 45 min ago
                    </p>
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
