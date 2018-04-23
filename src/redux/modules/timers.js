import client from "../../apollo-client/client";
import { TIMERS_QUERY } from "../../scenes/timers/gql/timerQueries";

export const TIMER_ADD = "redux-example/timers/ADD";
export const TIMER_UPDATE = "redux-example/timers/UPDATE";

export const TIMER_FETCH = "redux-example/timers/FETCH";
export const TIMER_FETCH_SUCCESS = "redux-example/timers/FETCH_SUCCESS";
export const TIMER_FETCH_FAIL = "redux-example/timers/FETCH_FAIL";

const INITIAL_STATE = {
  fetched: false,
  loading: false,
  error: null,
  timers: [],
};

export const defaultTimer = {
  id: "",
  label: "",
  user: "",
  description: "",
  start: "",
  end: "",
  active: false,
  tags: [],
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TIMER_ADD:
      return {
        ...state,
        timers: [
          ...state.timers,
          Object.assign({}, defaultTimer, action.payload),
        ],
      };

    case TIMER_FETCH:
      return {
        ...state,
        loading: true,
        error: false,
        fetched: false,
      };

    case TIMER_FETCH_SUCCESS:
      return {
        ...state,
        fetched: true,
        loading: false,
        timers: action.result,
      };

    default:
      return state;
  }
}

export function loadTimers() {
  return {
    types: [TIMER_FETCH, TIMER_FETCH_SUCCESS, TIMER_FETCH_FAIL],
    promise: async () => {
      const result = await client.query({
        query: TIMERS_QUERY,
      });
      return result.data.timers;
    },
  };
}
