import { gsap } from "gsap";

export default (state) => {
  state.isAnimated = true;
  state.currentSlide = 3;
  document.body.onmousemove = () => {};

  const tl = gsap.timeline();

  tl.to("#web3", { opacity: 1, duration: 0.2 });
  tl.to("#decentralization", { backgroundColor: "#D402BF", duration: 0.8 });
  tl.to(
    "#decentralization .group-lines path",
    { fill: "#D402BF", duration: 0.8, delay: 0.3 },
    "-=1"
  );
  tl.to(
    "#decentralization .header-logo",
    {
      scale: 0.65,
      duration: 0.8,
    },
    "-=1"
  );
  tl.to(
    "#decentralization .header-logo-text",
    {
      y: -200,
      duration: 0.8,
    },
    "-=1"
  );

  tl.to(
    "#decentralization .logo-group-svg",
    { x: "100%", y: "100%", duration: 0.5, delay: 1 },
    "-=1"
  );

  tl.to("#decentralization .big", { height: "110vh", top: 0, duration: 0.5 });

  tl.to("#decentralization .group-lines path", {
    transformOrigin: "50% 50%",
    rotate: "31deg",
  });

  tl.to(
    "#decentralization .star",
    {
      transformOrigin: "50% 50%",
      rotate: "65deg",
      opacity: 1,
      delay: 0.5,
    },
    "-=1"
  );

  tl.to(
    "#decentralization .text",
    {
      y: 500,
      duration: 0.8,
    },
    "-=1"
  );

  tl.to("#web3 .container div", {
    opacity: 1,
    duration: 1.2,
    delay: -0.5,
    onComplete: () => {
      state.isAnimated = false;
    },
  });

  return tl;
};
