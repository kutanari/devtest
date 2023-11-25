import { Route, Routes } from "react-router";
import Home from "./components/Home";
import UserIndex from "./components/users/UserIndex";
import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <div className="bg-slate-200">
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/users" element={<UserIndex />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;
