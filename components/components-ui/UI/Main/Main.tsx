import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = PropsWithChildren;

export default function Main({ children }: Props) {
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar />
      <div className="container-fluid py-4">
        {children}
        <Footer />
      </div>
    </main>
  );
}
