import { gsap } from "gsap";

import { setRandomNumber } from "./utils";

export default () => {
  const mainSvgTL = gsap.timeline();
  const itemsTL = gsap.timeline();
  const items = [...document.querySelectorAll(".item")];
  const itemsBBox = document.querySelector(".items svg").getBBox();

  itemsTL.set(".item", { opacity: 0 });
  mainSvgTL.set(".main-gray", { opacity: 0 });
  mainSvgTL.set(".path-1", { opacity: 0 });

  mainSvgTL.fromTo(
    "#center",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "sine.inOut" }
  );
  mainSvgTL.to("#main-offset", {
    attr: {
      offset: 0.580208,
    },
    repeat: 100,
    duration: 0.8,
    yoyo: true,
    delay: 1,
  });

  itemsTL.to(".path-1", { opacity: 1, duration: 0.3, delay: 3.5 }, "-=1");
  itemsTL.to(".group-1", {
    opacity: 1,
    duration: 0.8,
    ease: "power1.in",
  });
  itemsTL.to(".path-mask-offset", {
    attr: {
      offset: 0,
    },
    duration: 4.2,
  });

  itemsTL.to(
    ".path-mask-offset-2",
    {
      attr: {
        offset: 1,
      },
      duration: 1,
      delay: -3.5,
    },
    "-=1"
  );
  itemsTL.to(".group-1-gray", {
    opacity: 0,
    duration: 0.8,
    ease: "power1.in",
    delay: -3.5,
  });

  return {};
};
