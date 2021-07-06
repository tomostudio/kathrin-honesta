import React from "react";
import { AnimatePresence } from "framer-motion";

import CustomCursor from "../components/cursor/index";

export default function GatsbyLayout(props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <CustomCursor />
      {props.children}
    </AnimatePresence>
  );
}
