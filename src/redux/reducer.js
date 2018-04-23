import multireducer from "multireducer";
import { routerReducer } from "react-router-redux";
import { reducer as form } from "redux-form";
import auth from "./modules/auth";
import notifs from "./modules/notifs";
import counter from "./modules/counter";
import info from "./modules/info";
import ideas from "./modules/ideas";
import timers from "./modules/timers";

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    form,
    notifs,
    auth,
    ideas,
    timers,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter,
    }),
    info,
    ...asyncReducers,
  };
}
