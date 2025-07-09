"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

export function Wrapper({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      const sidePanel = document.getElementById("sidePanel");
      const presetDropdown = document.getElementById("dropdown");
      const children: EventTarget[] = Array.from(
        sidePanel?.querySelectorAll("*") ?? []
      ).concat(Array.from(presetDropdown?.querySelectorAll("*") ?? []));

      if (event.target !== null && children.includes(event.target)) {
        console.log(event.target);
        return;
      }
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
