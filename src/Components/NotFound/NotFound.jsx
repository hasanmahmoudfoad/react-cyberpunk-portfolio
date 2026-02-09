import React from "react";
import styels from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={` container-fluid  p-0`}>
        <div className={`${styels.notFoundWrapper}`}>
          <h1 class="headding-1 font-rubik-glitch text-blue-neon text-glow-purple cyberGlitch_ani" data-text='404'>404</h1>
          <h2 class="headding-3 font-rubik-glitch text-blue-neon text-glow-blue cyberGlitch_ani">Page Not Found</h2>
        </div>
      </div>
    </>
  );
}
