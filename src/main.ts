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
import runWeb3, { prev as prevWeb } from "./scripts/web3";
import runTools, { prev as prevTools } from "./scripts/tools";
import runOpportunities, {
  prev as prevOpportunities,
} from "./scripts/opportunities";

import "./main.scss";

const plugins = [TextPlugin, EasePack, CSSPlugin, CustomEase, Observer];
gsap.registerPlugin(...plugins);

const state = {
  isAnimated: false,
  currentSlide: 1,
  shown: {
    web3: false,
    tools: false,
    opportunities: false,
  },
};
const masterTL = gsap.timeline();

masterTL.set("main", { opacity: 1 });

masterTL.add(runStart(state));
masterTL.add(runDecentralization(state), "runDecentralization");

Observer.create({
  target: window,
  type: "wheel,touchmove,scroll",
  onUp: () => {
    if (!state.isAnimated) {
      state.isAnimated = true;
      switch (state.currentSlide) {
        case 5:
          prevOpportunities(state);
          break;
        case 4:
          prevTools(state);
          break;
        case 3:
          prevWeb(state);
          break;
        default:
          state.isAnimated = false;
          break;
      }
    }
  },
  onDown: () => {
    if (!state.isAnimated) {
      switch (state.currentSlide) {
        case 2:
          if (!state.shown.web3) {
            masterTL.add(runWeb3(state), "web3");
            state.shown.web3 = true;
          } else {
            runWeb3(state);
          }
          break;
        case 3:
          if (!state.shown.tools) {
            masterTL.add(runTools(state), "tools");
            state.shown.tools = true;
          } else {
            runTools(state);
          }
          break;
        case 4:
          if (!state.shown.opportunities) {
            masterTL.add(runOpportunities(state), "opportunities");
            state.shown.opportunities = true;
          } else {
            runOpportunities(state);
          }
          break;
        default:
          break;
      }
    }
  },
});
