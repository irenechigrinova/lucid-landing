import { gsap } from "gsap";

export default (state) => {
  state.isAnimated = true;
  state.currentSlide = 1;

  const mainSvgTL = gsap.timeline();
  const itemsTL = gsap.timeline();

  itemsTL.set(".item", { opacity: 0 });
  mainSvgTL.set(".main-gray", { opacity: 0 });
  mainSvgTL.set(".path-1", { opacity: 0 });
  mainSvgTL.set(".path-2", { opacity: 0 });
  mainSvgTL.set(".path-3", { opacity: 0 });

  mainSvgTL.fromTo(
    "#center",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "sine.inOut" }
  );
  mainSvgTL.to("#main-offset", {
    attr: {
      offset: 0.580208,
    },
    repeat: 9,
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

  itemsTL.to(".path-2", { opacity: 1, duration: 0.3, delay: -3.5 });
  itemsTL.to(
    ".group-2",
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.in",
      delay: -2,
    },
    "-=1"
  );
  itemsTL.to(".path-mask-offset-g2", {
    attr: {
      offset: 0,
    },
    duration: 4.2,
    delay: -2,
  });

  itemsTL.to(
    ".path-mask-offset-2-g2",
    {
      attr: {
        offset: 1,
      },
      duration: 1,
      delay: -3.5,
    },
    "-=1"
  );
  itemsTL.to(".group-2-gray", {
    opacity: 0,
    duration: 0.8,
    ease: "power1.in",
    delay: -3.5,
  });

  itemsTL.to(".path-3", { opacity: 1, duration: 0.3, delay: -4 });
  itemsTL.to(
    ".group-3",
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.in",
      delay: -2,
    },
    "-=1"
  );
  itemsTL.to(".path-mask-offset-g3", {
    attr: {
      offset: 0,
    },
    duration: 4.2,
    delay: -2,
  });

  itemsTL.to(
    ".path-mask-offset-3-g3",
    {
      attr: {
        offset: 1,
      },
      duration: 1,
      delay: -3.5,
    },
    "-=1"
  );
  itemsTL.to(".group-3-gray", {
    opacity: 0,
    duration: 0.8,
    ease: "power1.in",
    delay: -3.5,
    onComplete: () => {
      document.querySelector("#center").style.transformBox = "fill-box";
      setTimeout(() => {
        document.querySelector("#center").style.transformOrigin = "35% 63%";
        document.querySelector("#center").style.transition = "transform 600ms";
        document.querySelector("#center .lines").style.transition =
          "opacity 400ms";
        document.querySelector("#center .lines").style.opacity = "0";
        document.querySelector("#center").style.transform = `scale(${
          window.innerWidth < 612 || window.innerWidth > 2008 ? "26" : "15"
        })`;
      }, 1000);
    },
  });

  return mainSvgTL;
};
