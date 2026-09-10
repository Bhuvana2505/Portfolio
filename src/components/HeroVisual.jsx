import React from "react";
import VaporizeImageEffect from "./ui/VaporizeImageEffect";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto select-none">
      <div className="relative aspect-[4/3.8] w-full overflow-visible">
        <VaporizeImageEffect 
          imageUrl="/portrait-new.png"
          spread={5}
          density={8}
          animation={{
            vaporizeDuration: 2.5,
            fadeInDuration: 1.5,
            waitDuration: 1,
          }}
          direction="left-to-right"
        />
      </div>
    </div>
  );
}
