import { PROCESS_LOADING, SIGNUP_USER, USER_LOGIN } from "../../utils/types";
import { initState } from "../initial-state/init-state";

const processLoading = {
    type: PROCESS_LOADING,
    updater: (state, payload) => {
        return {
            ...state,
            process: {
                ...state?.process,
                loading: true
            }
        }
    }
}

const userSignUp = {
    type: SIGNUP_USER,
    updater: (state, payload) => {
        return {
            ...state,
            user: {
                ...state?.user,
                signup: {
                    ...state.signup,
                    success: payload?.message == "success" ? true : false,
                }
            }
        }
    }
}

const userLogin = {
    type: USER_LOGIN,
    updater: (state, payload) => {
        return {
            ...state,
            user: {
                ...state?.user,
                login: {
                    ...state.login,
                    token: payload?.token,
                }
            }
        }
    }
}


const mainReducers = [
    userSignUp,
    userLogin,
    processLoading,
]

export const mainReducer = (state = initState, action) => {
    const { type, payload } = action;
    for (let reducer of mainReducers) {
        if (reducer.type == type) return reducer.updater(state, payload);
    }
    return state;
};