import { gsap } from "gsap";

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

export default () => {
  const tl = gsap.timeline();

  tl.set("#decentralization", { display: "block" });
  tl.set("#decentralization .header-logo", { opacity: 0 });
  tl.set("#decentralization .header-logo-text path", { opacity: 0 });
  tl.set("#decentralization .icons", { transform: "scale(0)" });

  tl.to("#decentralization .header-logo", {
    opacity: 1,
    duration: 0.6,
    ease: "power1.out",
    delay: 0.5,
  });

  tl.to("#decentralization .header-logo-text path", {
    opacity: 1,
    duration: 0.1,
    ease: "power1.in",
    stagger: 0.1,
  });

  tl.from("#decentralization .text p", {
    y: 300,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
    duration: 1.9,
  });

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
        document
          .querySelector("#decentralization")
          .addEventListener("mousemove", handleMouseMove);
      },
    },
    "-=1"
  );

  return tl;
};
