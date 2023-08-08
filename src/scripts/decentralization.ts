import { gsap } from "gsap";
import { TState } from "./utils";

const handleMouseMove = (e: MouseEvent) => {
  gsap.to("#decentralization .icons", {
    x: Math.abs(
      ((e.clientX - window.innerWidth / 2) / window.innerWidth) * -100
    ),
    y: Math.abs(
      ((e.clientY - window.innerHeight / 2) / window.innerHeight) * -100
    ),
    duration: 0.5,
  });
};

export default (state: TState) => {
  state.currentSlide = 2;
  state.isAnimated = true;

  const tl = gsap.timeline();

  tl.to("#decentralization", { opacity: 1, duration: 0.2 }, "-=1");

  tl.to("#decentralization .header-logo", {
    opacity: 1,
    duration: 0.4,
    ease: "power1.out",
  });

  tl.to("#decentralization .header-logo-text path", {
    opacity: 1,
    duration: 0.1,
    ease: "power1.in",
    stagger: 0.1,
  });

  tl.fromTo(
    "#decentralization .text p",
    { y: "100vh" },
    {
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
      duration: 1.9,
    }
  );

  tl.to(
    "#decentralization .icons",
    {
      keyframes: {
        "0%": { transform: "scale(0)", transformOrigin: "100% 100%" },
        "95%": { transform: "scale(1.02)", transformOrigin: "100% 100%" },
        "100%": { transform: "scale(1)", transformOrigin: "100% 100%" },
      },
      ease: "power1",
      duration: 1,
      onComplete: () => {
        document.body.onmousemove = handleMouseMove;
        state.isAnimated = false;
      },
    },
    "-=1"
  );

  return tl;
};
