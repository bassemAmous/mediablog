import { expect } from 'chai';
import User from '../../index';
import { loadedUsers } from '../dataTest/usersData.json';
import { loadedUser } from '../dataTest/userData.json';

describe('getters tests', () => {
  const state = {
    loadedUsers,
    loadedUser
  }
  it('loadedUsers test', () => {
    const loadedPostsResult =  User.getters.loadedUsers(state)
    expect(loadedPostsResult).to.deep.equal(loadedUsers)
  })
  it('loadedUser test', () => {
    const loadedUserDetailResult =  User.getters.loadedUser(state)
    expect(loadedUserDetailResult).to.deep.equal(loadedUser)
  })
})
