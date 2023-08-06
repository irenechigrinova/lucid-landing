import { gsap } from "gsap";
import { TextPlugin, EasePack, CSSPlugin, CustomEase } from "gsap/all";

import runStart from "./scripts/start";
import runDecentralization from "./scripts/decentralization";

import "./main.scss";

const plugins = [TextPlugin, EasePack, CSSPlugin, CustomEase];
gsap.registerPlugin(...plugins);

const masterTL = gsap.timeline();

masterTL.set("main", { opacity: 1 });

masterTL.add(runStart());
masterTL.add(runDecentralization());
