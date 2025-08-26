import { useRef, useLayoutEffect } from "react";
import { startPosition } from "./animation";
import { gsap } from "gsap/gsap-core";

export function useCircleInitialization(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  page: number,
  totalPages: number
) {
  const isInitialized = useRef(false);

  useLayoutEffect(() => {
    if (!isInitialized.current && CircleRef.current) {
      startPosition(CircleRef, page, totalPages);
      
      // Animate circle container
      gsap.fromTo(CircleRef.current.querySelectorAll(".circle-container"), {
        width: 0,
        height: 0
      }, {
        width: '26vw',
        height: '26vw',
      });
      
      isInitialized.current = true;
    }
  }, [CircleRef, page, totalPages]);

  return isInitialized.current;
}