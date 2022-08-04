import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  logOut: () => void

}

export const AuthContext = createContext({} as ContextProps);
