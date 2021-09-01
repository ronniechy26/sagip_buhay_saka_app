import { showMessage } from 'react-native-flash-message';
import { TYPE_ERROR } from '../constants';
import { syncActions } from '../reducers/UserReducer';

const TokenMiddleware = (store : any) => (next :any) => (action :any) => {
    if (
        action.status === TYPE_ERROR &&
        ((Array.isArray(action.payload) &&
            action.payload[0] === 'Token has expired') ||
            action.payload.message === 'Token has expired')
    ) {
        store.dispatch(syncActions.logout());
        showMessage({
            icon : 'danger',
            message: 'Token has expired!',
            description : 'Please Log in again!',
            type: "danger",
        });
    }

    return next(action);
};

export default TokenMiddleware;