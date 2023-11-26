import axios, { AxiosResponse } from "axios";
import React, { ReactNode, createContext } from "react";

type User = {
    id: number;
    name: string;
    email: string;
}

type UserContextProps = {
    users: User[];
    getUsers: (Promise<void>);
    // user: User | null;
    // setUser: (user: User | null) => void;
}


const env = import.meta.env;
axios.defaults.baseURL = env.VITE_API_BASE_URL + "/api/" + env.VITE_API_VERSION;

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [users, setUsers] = React.useState<User[]>([]);

    
    const getUsers = async () => {
        try {
            const response: AxiosResponse = await axios.get( "/users" );
            const userData: User[] = response.data.data;
            setUsers(userData);
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    return <UserContext.Provider value={{users, getUsers}}>{ children }</UserContext.Provider>
}



export default UserContext;