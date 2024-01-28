import Rules from "./views/Rules.vue"
import { store } from "./stores/sets-store";
import { initialize } from "./setup";
import { createRouter } from "./router";

initialize(createRouter(["/dominion-randomizer/rules.html"], Rules), store);
