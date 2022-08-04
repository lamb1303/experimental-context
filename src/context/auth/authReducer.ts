import { IUser } from '../../interfaces/user';
import { AuthState } from '.';


type AuthActionType =
    | { type: '[Auth] - Login', payload: IUser }
    | { type: '[Auth] - Logout' }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

    switch (action.type) {
        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case '[Auth] - Logout':
            return {
                ...state,
            }

        default:
            return state;
    }

}