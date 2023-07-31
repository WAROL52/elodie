import React, { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  appName: ReactNode;
  title: ReactNode;
  description: ReactNode;
}>;

export default function HomePage({
  children,
  appName,
  description,
  title,
}: Props) {
  return (
    <section
      className="background-radial-gradient ui-overflow-x-hidden "
      style={{ width: "100%", height: "94vh" }}
    >
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              {appName}
              <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>{title}</span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              {description}
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            />
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            />
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
