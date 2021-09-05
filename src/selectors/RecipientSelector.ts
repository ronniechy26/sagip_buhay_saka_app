import { IState, IStatus } from '../reducers/RootReducer';
import { IReducerAction } from '../reducers/RecipientReducer';

export const getRecipientStatus = (
    state: IState,
    action : IReducerAction['type']
): any => state.RecipientReducer.status

