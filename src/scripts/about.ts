import { gsap } from "gsap";
export { setRandomNumber } from "./utils";

const finalAnimation = () => {
  gsap.to("#about", {
    y: "-100vh",
    duration: 0.6,
    ease: "power1.easeInOut",
    delay: 2,
  });
};

const nextSwing = (vars: gsap.TweenVars) => {
  if (vars.power > 0) {
    vars.rotation =
      (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
    vars.power -= setRandomNumber(0.1, 0.4);
    gsap.to(vars.target, {
      rotationX: vars.rotation,
      duration: vars.speed + vars.maxspeed * vars.power,
      ease: vars.ease,
      onComplete: nextSwing,
      onCompleteParams: [vars],
    });
  } else {
    gsap.to(vars.target, {
      rotationX: 0,
      ease: vars.ease,
      clearProps: "all",
      duration: vars.speed,
      onComplete: finalAnimation,
    });
  }
};

export default () => {
  const aboutTL = gsap.timeline();
  const logoVars = {
    origin: "top center",
    perspective: 600,
    ease: "power1.easeInOut",
    power: 1,
    duration: 5,
    rotation: -90,
    maxrotation: 60,
    speed: 0.5,
    maxspeed: 0.2,
    target: ".gsap",
  };

  const cursorTL = gsap.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  });

  const textTL = gsap.timeline({ yoyo: false });
  textTL.to(".text", { duration: 2, text: "Made with gsap", delay: 1 });

  const logoTL = gsap.timeline();
  logoTL.set(logoVars.target, {
    rotationX: logoVars.rotation,
    transformOrigin: logoVars.origin,
    transformPerspective: logoVars.perspective,
  });
  logoTL.fromTo(logoVars.target, { opacity: 0 }, { opacity: 1, duration: 0.4 });
  logoTL.to(logoVars.target, {
    opacity: 1,
    delay: 0.4,
    onStart: nextSwing,
    onStartParams: [logoVars],
  });

  aboutTL.add(cursorTL);
  aboutTL.add(textTL);
  aboutTL.add(logoTL);

  return aboutTL;
};
