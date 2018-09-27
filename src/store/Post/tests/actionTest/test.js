import axios from "axios";
import MockAdapter from "axios-mock-adapter";
let mock = new MockAdapter(axios);
import { testAction } from "./testUtils";
import Post from '../../index';
import credential from '../../../../credential/appCredentials'
describe('Post Actions', () => {
it("get post", done => {
  const response = {};
  mock.onGet().reply(200, response);
  const actionPayload = 1;
  const state = null;
  const expectedMutations = [
    {
    type:"setLoading",
    payload:true
    },
    {
      type: "setLoadedPostDetail",
      payload: response
    },
    {
    type:"setLoading",
    payload:false
    }
  ];
  testAction(Post.actions.loadedPostDetail, actionPayload, state, expectedMutations, done);
});
it("get post commets", done => {
  const response = {};
  mock.onGet(credential.postUrlTest+credential.id+credential.postCommentUrl).reply(200, response);
  const actionPayload = 1;
  const state = null;
  const expectedMutations = [
    {
    type:"setLoading",
    payload:true
    },
    {
      type: "setLoadedPostComments",
      payload: response
    },
    {
    type:"setLoading",
    payload:false
    }
  ];
  testAction(Post.actions.loadedPostComments, actionPayload, state, expectedMutations, done);
});
})
