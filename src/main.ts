import { gsap } from "gsap";
import {
  TextPlugin,
  EasePack,
  CSSPlugin,
  CustomEase,
  Observer,
} from "gsap/all";

import runStart from "./scripts/start";
import runDecentralization from "./scripts/decentralization";
import runWeb3 from "./scripts/web3";
import runTools from "./scripts/tools";
import runOpportunities from "./scripts/opportunities";

import "./main.scss";

const plugins = [TextPlugin, EasePack, CSSPlugin, CustomEase, Observer];
gsap.registerPlugin(...plugins);

const state = {
  isAnimated: false,
  currentSlide: 1,
};
const masterTL = gsap.timeline();

masterTL.set("main", { opacity: 1 });

masterTL.add(runStart(state));
masterTL.add(runDecentralization(state));

Observer.create({
  target: window,
  type: "wheel,touchmove,scroll",
  onUp: () => {
    if (!state.isAnimated) {
      // switch (state.currentSlide) {
      //   case 2:
      //     masterTL.add(runWeb3(state));
      //     break;
      //   case 3:
      //     masterTL.add(runTools(state));
      //     break;
      //   default:
      //     break;
      // }
    }
  },
  onDown: () => {
    if (!state.isAnimated) {
      switch (state.currentSlide) {
        case 2:
          masterTL.add(runWeb3(state));
          break;
        case 3:
          masterTL.add(runTools(state));
          break;
        case 4:
          masterTL.add(runOpportunities(state));
          break;
        default:
          break;
      }
    }
  },
});
