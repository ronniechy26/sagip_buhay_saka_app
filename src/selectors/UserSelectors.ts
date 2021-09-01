import { IState } from '../reducers/RootReducer';

export const getUserStatus = ( state: IState): any => state.UserReducer.status;