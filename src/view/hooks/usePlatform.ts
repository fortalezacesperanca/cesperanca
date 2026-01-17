import { useState } from "react";

export function usePlatform() {
  const [isMobile, _] = useState(navigator.maxTouchPoints > 0);
  // const isMobile = navigator.maxTouchPoints > 0;
  const isDesktop = !isMobile;
  return { isMobile, isDesktop };
}
