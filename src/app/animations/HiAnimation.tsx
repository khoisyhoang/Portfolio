"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { div } from "motion/react-client";

export default function HiAnimation() {
  return (
    <div className="w-50 h-50 ">
      <DotLottieReact src="/images/animations/helu.lottie" loop autoplay />
    </div>
  );
}
