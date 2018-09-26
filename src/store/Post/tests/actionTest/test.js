import axios from "axios";
import MockAdapter from "axios-mock-adapter";
let mock = new MockAdapter(axios);
import { testAction } from "./testUtils";
import User from '../../index';
describe('Post Actions', () => {
 it("get Posts", done => {
  const response = {};
  mock.onGet("https://jsonplaceholder.typicode.com/post").reply(200, response);
  const actionPayload = null;
  const state = null;
  const expectedMutations = [
    {
    type:"setLoading",
    payload:true
    },
    {
      type: "setLoadedUsers",
      payload: response
    },
    {
    type:"setLoading",
    payload:false
    }
  ];
  testAction(User.actions.loadedUsers, actionPayload, state, expectedMutations, done);
});
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
      type: "setLoadedUser",
      payload: response
    },
    {
    type:"setLoading",
    payload:false
    }
  ];
  testAction(User.actions.loadedUser, actionPayload, state, expectedMutations, done);
});
})
