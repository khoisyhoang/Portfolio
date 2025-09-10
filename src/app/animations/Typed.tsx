"use client";
import Typed from "typed.js";
import React from "react";

export default function TypedAnimation({strings}: {strings: string[]}) {
  const el = React.useRef(null);

  React.useEffect(() => {
    if (!el.current || !strings || strings.length === 0) return;
    
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 20,   // speed of deleting
      backDelay: 1000, // pause before deleting
      loop: true,      // 🔑 enable looping
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <span className="">
      <span ref={el} />
    </span>
  );
}
