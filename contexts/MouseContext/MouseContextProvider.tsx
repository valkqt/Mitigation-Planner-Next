"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { MouseContext } from "./MouseContext";

export const MouseContextProvider = ({ children }: PropsWithChildren) => {
  const mouse = useRef(0);

  useEffect(() => {
    function mouseMoveHandle(e: MouseEvent) {
      mouse.current = e.pageX - 64;
    }

    document.addEventListener("mousemove", mouseMoveHandle);
    return () => document.removeEventListener("mousemove", mouseMoveHandle);
  }, []);

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  );
};
