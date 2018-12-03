export const getLastPostId = state => {
  const timeline = state.timelineReducer.timeline;
  return timeline[timeline.length - 1].id;
}

export const getConfiguration = state => {
  return state.configurationReducer;
}
