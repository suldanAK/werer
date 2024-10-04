import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span>Akdev</span>
    </>
  ),
  project: {
    link: "https://github.com/akdev11/akdev.git",
  },
  chat: {
    // link: "",
    icon: (
      <>
        {/* <img
          style={{ width: "35px" }}
          src=""
          alt=""
        /> */}
      </>
    ),
  },
 
  footer: {
    text: "owner akdev",
  },
};

export default config;
