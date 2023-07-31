import InterfaceUI from "@/components/components-ui/UI/Components/InterfaceUI";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <InterfaceUI title="Notifications">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12">
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Today{" "}
                    <span className="badge rounded-pill bg-primary">42</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#tab-2"
                  >
                    Lastest{" "}
                    <span className="badge rounded-pill bg-primary">42</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#tab-3"
                  >
                    Popular{" "}
                    <span className="badge rounded-pill bg-primary">42</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#tab-4"
                  >
                    All{" "}
                    <span className="badge rounded-pill bg-primary">42</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane active" role="tabpanel">
                  <div className="thread-list-head">
                    <nav className="thread-pages">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">4</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">5</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" aria-label="Next">
                            <span aria-hidden="true">»</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <ul className="thread-list">
                    <li className="thread">
                      <span className="time">Apr 21</span>
                      <span className="title">
                        Maecenas finibus est nec pretium molestie.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 20</span>
                      <span className="title">
                        Curabitur consectetur velit pharetra ex eleifend tempor.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 20</span>
                      <span className="title">
                        Fusce iaculis ligula at nisl mollis suscipit.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 18</span>
                      <span className="title">
                        Pellentesque tempus augue id risus lacinia vehicula.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 17</span>
                      <span className="title">
                        Quisque lacinia massa non ex lobortis congue.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 19</span>
                      <span className="title">
                        Mauris quis elit vitae erat luctus sagittis non vel ex.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 17</span>
                      <span className="title">
                        Nam dapibus urna vitae semper egestas.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Apr 15</span>
                      <span className="title">
                        Sed sit amet ante malesuada, lacinia urna sed, faucibus
                        sem.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Mar 23</span>
                      <span className="title">
                        Nullam et massa a velit laoreet porttitor et nec neque.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Mar 21</span>
                      <span className="title">
                        Donec ut elit sodales, dignissim ligula at, posuere
                        lacus.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                    <li className="thread">
                      <span className="time">Mar 2</span>
                      <span className="title">
                        Nam in ligula vel nisl lobortis suscipit nec in lectus.{" "}
                      </span>
                      <span className="icon">
                        <a className="subscribe" href="javascript:void(0)">
                          <i className="fa fa-star-o" />
                        </a>
                        <a className="flag" href="javascript:void(0)">
                          <i className="fa fa-flag" />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div id="tab-2" className="tab-pane" role="tabpanel" />
                <div id="tab-3" className="tab-pane" role="tabpanel" />
                <div id="tab-4" className="tab-pane" role="tabpanel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InterfaceUI>
  );
}
