import {TIMELINE_AVAILABLE, TIMELINE_APPEND_POST, TIMELINE_LOADING_MORE_POST } from "../actions/" //Import the actions types constant we defined in our actions

let timelineState = {
  timeline: [],
  loading: true,
  loadingMorePost: false,
};

const TimelineReducer = (state = timelineState, action) => {
  switch (action.type) {
    case TIMELINE_AVAILABLE:
      state = Object.assign({}, state, { timeline: action.data, loading: false });
      return state;
    case TIMELINE_APPEND_POST:
      state = Object.assign({}, state, { timeline: state.timeline.concat(action.data), loadingMorePost: false });
      return state;
    case TIMELINE_LOADING_MORE_POST:
      state = Object.assign({}, state, { loadingMorePost: true});
      return state;
    default:
      return state;
    }
};

export default TimelineReducer;
