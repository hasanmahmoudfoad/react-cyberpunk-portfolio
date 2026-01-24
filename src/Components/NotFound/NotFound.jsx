import React from "react";
import styels from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={` container-fluid p-0`}>
        <div className={`${styels.notFoundWrapper}`}>
          <h1 class="font-rubik-glitch text-blue-neon extraLargeHeadding text-glow-purple shakingGlitch_ani" data-text='404'>404</h1>
          <h2 class="font-neon text-blue-neon  LargeHeadding text-glow-blue flicker_ani">Page Not Found</h2>
        </div>
      </div>
    </>
  );
}
