import axios from "axios";
import MockAdapter from "axios-mock-adapter";
let mock = new MockAdapter(axios);
import { testAction } from "./testUtils";
import User from '../../index';
describe('User Actions', () => {
 it("get Users", done => {
  const response = {};
  mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, response);
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
it("get User", done => {
  const response = {};
  mock.onGet("https://jsonplaceholder.typicode.com/users/1").reply(200, response);
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
