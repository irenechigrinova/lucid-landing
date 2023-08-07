import { gsap } from "gsap";

export default (state) => {
  state.isAnimated = true;
  state.currentSlide = 5;

  const tl = gsap.timeline();

  tl.to("#decentralization .group-lines path", {
    transformOrigin: "50% 50%",
    rotate: "-50deg",
    duration: 1,
  });

  tl.to(
    "#decentralization .icons",
    {
      opacity: 0,
      duration: 0.8,
    },
    "-=1"
  );
  tl.to(
    "#decentralization .header-logo path",
    { fill: "#000000", duration: 0.8 },
    "-=1"
  );
  tl.to("#tools div", { opacity: 0, duration: 0.4 }, "-=1");
  tl.to("#opportunities", { opacity: 1, duration: 0.4, delay: -0.2 }, "-=1");

  return tl;
};
