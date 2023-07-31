/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Script from "next/script";
import React, { PropsWithChildren } from "react";
import Aside from "./Sidebar/Aside";
import Main from "./Main/Main";
import Settings from "./Settings/Settings";

type Props = PropsWithChildren;

export default function Template2({ children }: Props) {
  return (
    <>
      <Header />
      <Aside />
      <Main>{children}</Main>
      <Settings />
      <Script
        strategy="afterInteractive"
        src="../assets/js/plugins/perfect-scrollbar.min.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="../assets/js/plugins/smooth-scrollbar.min.js"
      ></Script>

      <Script
        strategy="afterInteractive"
        src="../assets/js/material-dashboard.js"
      ></Script>
    </>
  );
}
function Header({}: Props) {
  return (
    <header>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="../assets/img/apple-icon.png"
      />
      <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
      <title> Accueil </title>
      {/*     Fonts and icons     */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
      />
      {/* Nucleo Icons */}
      <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
      <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
      {/* Font Awesome Icons */}
      {/* Material Icons */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
        rel="stylesheet"
      />
      {/* CSS Files */}
      <link
        id="pagestyle"
        href="../assets/css/material-dashboard.css?v=3.1.0"
        rel="stylesheet"
      />
    </header>
  );
}
