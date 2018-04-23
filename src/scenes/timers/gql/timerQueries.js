import gql from "graphql-tag";

export const TIMER_FRAGMENT_BASE = gql`
  fragment timerBase on TimerType {
    id
    label
    description
    loop
    tags
  }
`;

export const TIMER_FRAGMENT_TIMERINFO = gql`
  fragment timeInfo on TimerType {
    active
    start
    end
  }
`;

export const TIMERS_QUERY = gql`
  ${TIMER_FRAGMENT_BASE}
  ${TIMER_FRAGMENT_TIMERINFO}
  query GetTimers {
    timers {
      ...timerBase
      ...timeInfo
    }
  }
`;
