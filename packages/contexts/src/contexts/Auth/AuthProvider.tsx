import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { IUser } from "./Interfaces";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser>({
        id: "teste",
        name: "teste",
        email: "teste@teste.com",
    });

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
