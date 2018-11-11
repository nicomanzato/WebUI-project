import { DATA_AVAILABLE, TIMELINE_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions

let timelineState = {
  timeline: [],
  loading: true
};

const TimelineReducer = (state = timelineState, action) => {
    switch (action.type) {
        case TIMELINE_AVAILABLE:
            state = Object.assign({}, state, { timeline: action.data, loading: false });
            return state;
        default:
            return state;
    }
};

export default TimelineReducer;
