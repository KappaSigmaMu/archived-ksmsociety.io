/* eslint-disable */
import React from "react";
import { MDXProvider } from "@mdx-js/react";

export function wrapPageElement({ element }) {
  return <MDXProvider>{element}</MDXProvider>;
}
