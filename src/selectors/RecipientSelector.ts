import { IState } from '../reducers/RootReducer';

export const getRecipientStatus = (state: IState): any => state.RecipientReducer.status

