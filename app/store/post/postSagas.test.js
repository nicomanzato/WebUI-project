import { put, call, select } from 'redux-saga/effects'
import * as PostSagas from './postSagas'
import * as actions from './postActions'
import * as selectors from './postSelector'
import * as userSelectors from './../user/userSelector'
import PostMock from './mock/postMock'
import PostMock2 from './mock/postMock2'
import PostMock3 from './mock/postMock3'

const MockPromise = {
  then: () => {},
  json: () => { return { foo: 'bar' }}
};

const MockArray = {
  slice: () => { return ['test', 'slice']}
}

const MockSearchResults = {
  statuses: MockArray
}

describe('post sagas', () => {

  it('should handle loadTimeline', () => {
    const generator = PostSagas.loadTimeline();

    let next = generator.next();
    const url = PostSagas.generateTimelineUrl(PostSagas.serverIP, PostSagas.timelineCount);
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));
    next = generator.next([PostMock, PostMock2, PostMock3]);
    expect(next.value).toEqual(put({type: actions.SUCCESS_POST_LOAD, data: [PostMock, PostMock2, PostMock3]}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle loadTimeline', () => {
    const generator = PostSagas.loadTimeline();

    let next = generator.next();
    const url = PostSagas.generateTimelineUrl(PostSagas.serverIP, PostSagas.timelineCount);
    expect(next.value).toEqual(call(fetch, url));

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_POST_LOAD, errorDetail: 'something bad happened'}));
  });

  it('should handle infiniteScrollTimeline', () => {
    const generator = PostSagas.infiniteScrollTimeline();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getLastPostId));
    const maxID = '1122334455';

    next = generator.next(maxID);
    let url = `http://${PostSagas.serverIP}/timeline?count=${PostSagas.timelineCount}&max_id=${maxID}`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next([PostMock, PostMock2, PostMock3]);
    expect(next.value).toEqual(put({type: actions.SUCCESS_POST_LOAD_MORE, data: [PostMock, PostMock2, PostMock3].slice(1)}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle infiniteScrollTimeline', () => {
    const generator = PostSagas.infiniteScrollTimeline();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getLastPostId));
    const maxID = '1122334455';

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_POST_LOAD_MORE, errorDetail: 'something bad happened'}));
  });

  it('should handle searchForPost', () => {
    const generator = PostSagas.searchForPost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getSearchKeyword));
    const searchKeyword = 'aSearchKeyword';

    next = generator.next(searchKeyword);
    const url = `http://${PostSagas.serverIP}/search?q=${searchKeyword}&count=${PostSagas.searchCount}`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next(MockSearchResults);
    expect(next.value).toEqual(put({type: actions.SUCCESS_POST_SEARCH, data: MockSearchResults.statuses}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle searchForPost', () => {
    const generator = PostSagas.searchForPost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getSearchKeyword));
    const searchKeyword = 'aSearchKeyword';

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_POST_SEARCH, errorDetail: 'something bad happened'}));
  });

  it('should handle searchMorePost', () => {
    const generator = PostSagas.searchMorePost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getSearchKeyword));
    const searchKeyword = 'aSearchKeyword';

    next = generator.next(searchKeyword);
    expect(next.value).toEqual(select(selectors.getLastSearchResultId));
    const maxID = '1122334455';

    next = generator.next(maxID);
    const url = `http://${PostSagas.serverIP}/search?q=${searchKeyword}&max_id=${maxID}&count=${PostSagas.searchCount}`;
    expect(next.value).toEqual(call(fetch,url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next(MockSearchResults);
    expect(next.value).toEqual(put({type: actions.SUCCESS_POST_SEARCH_MORE, data: MockSearchResults.statuses.slice(1)}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle searchMorePost', () => {
    const generator = PostSagas.searchMorePost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getSearchKeyword));

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_POST_SEARCH_MORE, errorDetail: 'something bad happened'}));
  });

  it('should handle showPost', () => {
    const generator = PostSagas.showPost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getShowPostId));
    const postId = '112233';

    next = generator.next(postId);
    const url = `http://${PostSagas.serverIP}/show?id=${postId}`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next(PostMock);
    expect(next.value).toEqual(put({type: actions.SUCCESS_POST_SHOW, data: PostMock}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it ('should fail to handle showPost', () => {
    const generator = PostSagas.showPost();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getShowPostId));
    const postId = '112233';

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_POST_SHOW, errorDetail: 'something bad happened'}));
  })

  it('should handle loadUserProfileTimeline', () => {
    const generator = PostSagas.loadUserProfileTimeline();

    let next = generator.next();
    expect(next.value).toEqual(select(userSelectors.getUserProfileId));
    const userId = '11223344';

    next = generator.next(userId);
    const url = `http://${PostSagas.serverIP}/user_timeline?user_id=${userId}`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next([PostMock, PostMock2, PostMock3]);
    expect(next.value).toEqual(put({type: actions.SUCCESS_USER_PROFILE_LOAD_POST, data: [PostMock, PostMock2, PostMock3]}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle loadUserProfileTimeline', () => {
    const generator = PostSagas.loadUserProfileTimeline();

    let next = generator.next();
    expect(next.value).toEqual(select(userSelectors.getUserProfileId));
    const userId = '11223344';

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_USER_PROFILE_LOAD_POST, errorDetail: 'something bad happened'}));
  })

});
