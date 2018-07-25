import { handleActions } from 'redux-actions';
import { postSendEmail } from './mailAction';
const defaultState = {
  loading: false,
  error: null,
  success: false,
  failed: false
};

const reducer = handleActions(
  {
    [postSendEmail](state) {
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        failed: false
      };
    },
    POST_SEND_EMAIL_SUCCEEDED: (state, { data }) => ({
      ...state,
      loading: false,
      error: null,
      success: true,
      failed: false
    }),
    POST_SEND_EMAIL_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error,
      success: false,
      failed: true
    })
  },
  defaultState
);

export default reducer;
