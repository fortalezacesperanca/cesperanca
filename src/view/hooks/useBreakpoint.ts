import { useBreakpointValue } from "@chakra-ui/react";

export function useBreakpoint() {
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  return { breakpoint };
}
