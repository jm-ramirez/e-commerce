import { createContext } from "react";
import { create } from "yup/lib/Reference";

const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
})

export default AuthContext;