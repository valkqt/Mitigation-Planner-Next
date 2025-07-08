"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

export function Wrapper({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) {
      return;
    }

    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        window.scroll({
          left: window.scrollX + event.deltaY * 3,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="wrapper" ref={containerRef}>
      {children}
    </div>
  );
}
