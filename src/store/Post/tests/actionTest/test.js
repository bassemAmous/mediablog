import axios from "axios";
import MockAdapter from "axios-mock-adapter";
let mock = new MockAdapter(axios);
import { testAction } from "./testUtils";
import Post from '../../index';
describe('Post Actions', () => {

it("get post", done => {
  const response = {};
  mock.onGet("https://jsonplaceholder.typicode.com/posts/1").reply(200, response);
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
  mock.onGet('https://jsonplaceholder.typicode.com/posts/1/comments').reply(200, response);
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
