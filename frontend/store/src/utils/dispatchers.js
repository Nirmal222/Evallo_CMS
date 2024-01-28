import { useDispatch, useSelector } from "react-redux";
import { PROCESS_ERROR, PROCESS_LOADING, SIGNUP_USER, USER_LOGIN } from "./types";
import { UserService } from "../api/user-service";

export function useDispatchers() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.Global);
  return {
    signUpUser: async (payload) => {
      dispatch({ type: PROCESS_LOADING })
      try {
        const response = await UserService.signup(payload);
        dispatch({ type: SIGNUP_USER, payload: response?.data });
        return response;
      } catch (e) {
        console.log(e.message, "error");
        dispatch({ type: PROCESS_ERROR })
        throw new Error(e.message);
      }
    },

    loginUser: async (payload) => {
      dispatch({ type: PROCESS_LOADING })
      try {
        const response = await UserService.signin(payload);
        dispatch({ type: USER_LOGIN, payload: response?.data });
        return response;
      } catch (e) {
        console.log(e.message, "error");
        dispatch({ type: PROCESS_ERROR })
        throw new Error(e.message);
      }
    }

  }
}