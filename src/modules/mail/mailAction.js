import { createActions } from 'redux-actions';

const { postSendEmail } = createActions({
  POST_SEND_EMAIL: data => ({ data })
});

export { postSendEmail };
