import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNovel from "../pages/CreateNovel";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ViewEdit from "../pages/ViewEdit";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/login' element = {<LogIn />}/>
                <Route path = '/register' element = {<Register />}/>
                <Route path = '/view-edit' element = {<ViewEdit />}/>
                <Route path = '/create-novel' element = {<CreateNovel />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;