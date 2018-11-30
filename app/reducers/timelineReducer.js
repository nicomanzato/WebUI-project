import {
  REQUEST_TIMELINE_LOAD,
  SUCCESS_TIMELINE_LOAD,
  SUCCESS_TIMELINE_APPEND_MORE_POST,
  REQUEST_TIMELINE_APPEND_MORE_POST,
  REQUEST_TIMELINE_REFRESH,
  SUCCESS_TIMELINE_REFRESH
} from "../actions/timelineActions" //Import the actions types constant we defined in our actions

let timelineState = {
  timeline: [],
  loading: false,
  loadingMorePost: false,
  refreshing: false,
};

const TimelineReducer = (state = timelineState, action) => {
  switch (action.type) {
    case SUCCESS_TIMELINE_LOAD:
      state = Object.assign({}, state, { timeline: action.data, loading: false });
      return state;
    case REQUEST_TIMELINE_LOAD:
      state = Object.assign({}, state, { loading: true });
      return state;
    case SUCCESS_TIMELINE_APPEND_MORE_POST:
      state = Object.assign({}, state, { timeline: state.timeline.concat(action.data), loadingMorePost: false });
      return state;
    case REQUEST_TIMELINE_APPEND_MORE_POST:
      state = Object.assign({}, state, { loadingMorePost: true });
      return state;
    case REQUEST_TIMELINE_REFRESH:
      state = Object.assign({}, state, { loading: true, refreshing: true});
      return state;
    case SUCCESS_TIMELINE_REFRESH:
      state = Object.assign({}, state, { loading: false, refreshing: false});
      return state;
    default:
      return state;
    }
};

export default TimelineReducer;
