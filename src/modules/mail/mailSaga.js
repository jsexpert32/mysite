import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as MailAPI from './mailApi';

export function* mailSubscriber() {
  yield all([takeLatest('POST_SEND_EMAIL', postMail)]);
}

export function* postMail(data) {
  try {
    const sendMailReturn = yield call(MailAPI.postMailRequest, data);
    console.log('MAIL RETURN DATA HERE');
    console.log(sendMailReturn);
    if (sendMailReturn.success) {
      yield put({ type: 'POST_SEND_EMAIL_SUCCEEDED', sendMailReturn });
    } else {
      yield put({ type: 'POST_SEND_EMAIL_FAILED', sendMailReturn });
    }
  } catch (error) {
    console.log('ERROR', error);
    yield put({ type: 'POST_SEND_EMAIL_FAILED', error });
  }
}
