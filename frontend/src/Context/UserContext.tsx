import axios, { AxiosResponse } from "axios";
import React, { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";

type User = {
    id: number;
    name: string;
    email: string;
}

type UserContextProps = {
    users: User[];
    storeUser: Promise<void>;
    errors: object;
    formData: object;
    getUsers: (Promise<User[] | null>);
    setFormData: object;
}


const env = import.meta.env;
axios.defaults.baseURL = env.VITE_API_BASE_URL + "/api/" + env.VITE_API_VERSION;

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [users, setUsers] = React.useState<User[]>([]);
    const [formData, setFormData] = React.useState<object>({
        name: "",
        email: ""
    });
    const [errors, setErrors] = React.useState({});
    const navigate = useNavigate();

    const getUsers = async (): Promise<User[] | null> => {
        try {
            const response: AxiosResponse = await axios.get<User[]>( "/users" );
            const userData: User[] = response.data.data;
            setUsers(userData);
            return userData;
        } catch (error) {
            console.error("Error fetching user data", error);
            return null;
        }
    };

    const onChange = (e: Event) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const storeUser = async (e: Event) => {
        e.preventDefault();
        try {
            await axios.post<User>("/users", formData);
            setFormData({
                name: "",
                email: ""
            });
            setErrors({});
            navigate("/users");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrors(error?.response?.data.errors);
            } else {
                console.error('Error', error)
            }
        }
    }

    return <UserContext.Provider value={{users, getUsers, storeUser, formData, setFormData, onChange, errors}}>{ children }</UserContext.Provider>
}

export default UserContext;