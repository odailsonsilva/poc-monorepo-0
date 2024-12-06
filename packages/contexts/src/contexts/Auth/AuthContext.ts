import { createContext, useContext } from "react";
import { IAuthContext } from "./Interfaces";

export const AuthContext = createContext<IAuthContext>({
    user: {
        id: "",
        name: "",
        email: "",
    },
});

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
