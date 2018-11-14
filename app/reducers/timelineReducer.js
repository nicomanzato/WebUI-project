import {
  TIMELINE_AVAILABLE,
  TIMELINE_APPEND_POST,
  TIMELINE_LOADING_MORE_POST,
  START_REFRESHING_TIMELINE,
  FINISH_REFRESHING_TIMELINE
} from "../actions/" //Import the actions types constant we defined in our actions

let timelineState = {
  timeline: [],
  loading: true,
  loadingMorePost: false,
  refreshing: false,
};

const TimelineReducer = (state = timelineState, action) => {
  switch (action.type) {
    case TIMELINE_AVAILABLE:
      state = Object.assign({}, state, { timeline: action.data, loading: false });
      return state;
    case TIMELINE_APPEND_POST:
      state = Object.assign({}, state, { timeline: state.timeline.concat(action.data), loadingMorePost: false });
      return state;
    case START_REFRESHING_TIMELINE:
      state = Object.assign({}, state, { loading: true, refreshing: true});
      return state;
    case FINISH_REFRESHING_TIMELINE:
      state = Object.assign({}, state, { loading: false, refreshing: false});
      return state;
    default:
      return state;
    }
};

export default TimelineReducer;
