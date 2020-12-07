import {
  BLOG_CREATE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_RESET,
  BLOG_CREATE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_RESET,
  BLOG_UPDATE_SUCCESS,
} from "../constants/blogConstants";

export const postsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, posts: [] };

    case BLOG_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
      };

    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postDetailsReducer = (
  state = { post: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state };

    case BLOG_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };

    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };

    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true };

    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true };

    case BLOG_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };

    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case BLOG_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const postUpdateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };

    case BLOG_UPDATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };

    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case BLOG_UPDATE_RESET:
      return { post: {} };

    default:
      return state;
  }
};