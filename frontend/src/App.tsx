import { Route, Routes } from "react-router";
import Home from "./components/Home";
import UserIndex from "./components/users/UserIndex";
import Layout from "./components/Layout";
import UserCreate from "./components/users/UserCreate";
import { UserProvider } from "./Context/UserContext";

const App = () => {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/users" element={<UserIndex />} />
                        <Route path="/user/create" element={<UserCreate />} />
                    </Route>
                </Routes>
            </UserProvider>
        </>
    );
};

export default App;
