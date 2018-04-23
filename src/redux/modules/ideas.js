export const IDEA_ADD = "redux-example/ideas/ADD";
export const IDEA_TOGGLE = "redux-example/ideas/TOGGLE";
export const IDEA_UPDATE = "redux-example/ideas/UPDATE";
export const IDEA_VISIBLE_SET = "redux-example/ideas/SET";

export const VISIBILITY_ALL = "redux-example/ideas/visfilter/ALL";
export const VISIBILITY_COMPLETE = "redux-example/ideas/visfilter/COMPLETED";
export const VISIBILITY_ACTIVE = "redux-example/ideas/visfilter/ACTIVE";

const INITIAL_STATE = {
  ideas: [],
  filter: VISIBILITY_ALL,
};

export const defaultIdea = {
  id: "",
  text: "",
  completed: false,
  effort: 0,
  value: 0,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case IDEA_ADD:
      return {
        ...state,
        ideas: [
          ...state.ideas,
          Object.assign({}, defaultIdea, {
            id: action.id,
            text: action.text,
            completed: false,
          }),
        ],
      };

    case IDEA_TOGGLE:
      return {
        ...state,
        ideas: state.ideas.map(idea => {
          return idea.id === action.id
            ? { ...idea, completed: !idea.completed }
            : idea;
        }),
      };

    case IDEA_UPDATE:
      return {
        ...state,
        ideas: state.ideas.map(idea => {
          return idea.id === action.id
            ? Object.assign({}, idea, defaultIdea, action)
            : idea;
        }),
      };

    case IDEA_VISIBLE_SET:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}

let nextIdeaId = 0;

export const addIdea = text => {
  return {
    type: IDEA_ADD,
    id: nextIdeaId++,
    text,
  };
};
export const toggleIdea = id => {
  return {
    type: IDEA_TOGGLE,
    id,
  };
};
export const setVisibilityFilter = filter => {
  return {
    type: IDEA_VISIBLE_SET,
    filter,
  };
};
