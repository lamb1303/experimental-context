import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { FC, useEffect, useReducer } from "react";
import { IUser } from "../../interfaces";
import { AuthContext, authReducer } from ".";
import { entryApi } from "../../apis/MenuManager";

interface Props {
  children: React.ReactNode;
}

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = Cookies.get("token");
    try {
      const { user } = await entryApi("user/get-user", {
        token,
      });

      // Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (error) {
      //return Cookies.remove("token");
    }
  };

  const logOut = () => {
    console.log("remove token");
    Cookies.remove("token");

    return window.location.replace("http://localhost:3000/");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
