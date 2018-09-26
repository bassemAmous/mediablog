import { expect } from 'chai';
import Post from '../../index';
import { loadedPosts } from '../dataTest/postData/postsData.json';
import { loadedPostDetail } from '../dataTest/postData/postDetailsData.json';
import { postComments } from '../dataTest/postData/postCommentsData.json';

describe('getters tests', () => {
  const state = {
    loadedPosts,
    loadedPostDetail,
    postComments
  }
  it('loadedPosts test', () => {
    const loadedPostsResult =  Post.getters.loadedPosts(state)
    expect(loadedPostsResult).to.deep.equal(loadedPosts)

  })
  it('loadedPostDetail test', () => {
    const loadedPostDetailResult =  Post.getters.loadedPostDetail(state)
    expect(loadedPostDetailResult).to.deep.equal(loadedPostDetail
    )
  })
  it('loadedPostComments test', () => {
    const loadedPostComments =  Post.getters.loadedPostComments(state)
    expect(loadedPostComments).to.deep.equal(postComments)
  })
})
