import { gsap } from "gsap";
import { TextPlugin, EasePack, CSSPlugin, CustomEase } from "gsap/all";

import runAbout from "./scripts/about";
import runStart from "./scripts/start";

import "./main.scss";

const plugins = [TextPlugin, EasePack, CSSPlugin, CustomEase];
gsap.registerPlugin(...plugins);

const masterTL = gsap.timeline();

//masterTL.add(runAbout());
masterTL.add(runStart());
