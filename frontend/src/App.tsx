import { Route, Routes } from "react-router";
import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <div className="bg-slate-200">
                <Routes>
                    <Route path="/" element={<Layout />} >
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;
