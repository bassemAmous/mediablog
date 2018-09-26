import { expect } from 'chai';
import User from '../../index';
import { loadedUsers } from '../dataTest/usersData.json';
import { loadedUser } from '../dataTest/userData.json';

describe('mutations', () => {
  // mock state
  const state = {
    loadedUsers: [],
    loadedUser: {}
  }
  it('loadedUsers test', () => {

    // apply mutation
    User.mutations.setLoadedUsers(state, loadedUsers)
    // assert result
    expect(state.loadedUsers).to.equal(loadedUsers)
  })
  it('loadedUser test', () => {
    // apply mutation
    User.mutations.setLoadedUser(state, loadedUser)
    // assert result
    expect(state.loadedUser).to.equal(loadedUser)
  })
}
)
