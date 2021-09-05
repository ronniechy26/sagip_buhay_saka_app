import {
    ICustomAction,
    ICommonState,
    IReturnPromise,
    ICommonAction,
} from './RootReducer';
import ReducerFactory from '../libraries/reducerFactory';
import ThunkFactory from '../libraries/thunkFactory';
import { IRecipient } from '../models/RecipientModel';
import services from '../api/RecipientService';


export const actionTypes = {
    RECIPIENT_FETCH_LIST: 'RECIPIENT_FETCH_LIST',
    RECIPIENT_ADD : 'RECIPIENT_ADD',
    RECIPIENT_READ : 'RECIPIENT_READ',
    RECIPIENT_UPDATE : 'RECIPIENT_UPDATE',
    RECIPIENT_ACTIVATE : 'RECIPIENT_ACTIVATE',
    RECIPIENT_DEACTIVATE : 'RECIPIENT_DEACTIVATE',
} as const;

const thunkActions = {
    fetch_recipients : {
        type: actionTypes.RECIPIENT_FETCH_LIST,
        service: services.fetch_recipients,
    },
    add_recipient : {
        type: actionTypes.RECIPIENT_ADD,
        service: services.add_recipient,
    },
    read_recipient : {
        type: actionTypes.RECIPIENT_READ,
        service: services.read_recipient,
    },
    update_recipient : {
        type: actionTypes.RECIPIENT_UPDATE,
        service: services.update_recipient,
    },
    deactivate_recipient : {
        type: actionTypes.RECIPIENT_DEACTIVATE,
        service: services.deactivate_recipient,
    },
    activate_recipient : {
        type: actionTypes.RECIPIENT_ACTIVATE,
        service: services.activate_recipient,
    },
};

export const asyncActions = ThunkFactory(thunkActions);
type IThunkActions = typeof thunkActions;

export type IAsyncAction = {
    [key in keyof IThunkActions]: ICustomAction<
        IThunkActions[key]['type'],
        IReturnPromise<ReturnType<IThunkActions[key]['service']>>
    >;
}[keyof IThunkActions];

export type IReducerAction = IAsyncAction;

export interface IRecipientState extends ICommonState<IReducerAction> {
    list_recipient? : Array<IRecipient>;
    data_recipient? : IRecipient
}

const defaultState: IRecipientState = {
    status: {},
};

export const RecipientReducer = (
    state: IRecipientState = defaultState,
    action: ICommonAction<IReducerAction>
): IRecipientState => {
    switch (action.type) {
       
        case actionTypes.RECIPIENT_FETCH_LIST : 
            return {
                ...state,
                list_recipient : action?.payload?.data,
            };

        case actionTypes.RECIPIENT_READ : 
            return {
                ...state,
                data_recipient : action?.payload?.recipient,
            };
            
        case actionTypes.RECIPIENT_ACTIVATE : 
            return {
                ...state,
                data_recipient : action?.payload?.recipient,
            };

        case actionTypes.RECIPIENT_DEACTIVATE : 
            return {
                ...state,
                data_recipient : action?.payload?.recipient,
            };

        default:
            return state;
    }
};

export default ReducerFactory(RecipientReducer, defaultState);