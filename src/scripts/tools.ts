import { gsap } from "gsap";

export default (state) => {
  state.isAnimated = true;
  state.currentSlide = 4;

  const tl = gsap.timeline();

  tl.to("#decentralization .star", {
    transformOrigin: "50% 50%",
    rotate: "90deg",
    scale: 8,
  });

  tl.to(
    "#decentralization .group-lines path",
    {
      transformOrigin: "50% 50%",
      rotate: "20deg",
      delay: 0.5,
    },
    "-=1"
  );

  tl.to("#decentralization .svg-group-big-item", {
    transformOrigin: "50% 50%",
    scale: 6,
  });

  tl.to(
    "#decentralization .star",
    {
      opacity: 0,
      duration: 0.2,
      delay: 0.5,
    },
    "-=1"
  );

  tl.to(
    "#web3",
    {
      opacity: 0,
      duration: 0.2,
      delay: 0.5,
    },
    "-=1"
  );

  tl.to("#decentralization .group-lines path", {
    transformOrigin: "50% 50%",
    rotate: "10deg",
    delay: 0.2,
  });

  tl.to("#tools div", {
    opacity: 1,
    stagger: 0.4,
    delay: -0.8,
  });

  tl.to("#decentralization .group-lines path", {
    transformOrigin: "50% 50%",
    rotate: "15deg",
    delay: -0.5,
    onComplete: () => {
      state.isAnimated = false;
      tl.set("#decentralization", { backgroundColor: "#E7FF00" });
    },
  });

  return tl;
};
