import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNovel from "../pages/CreateNovel";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import NovelList from "../pages/NovelList";
import Register from "../pages/Register";
import ViewEdit from "../pages/ViewEdit";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/login' element = {<LogIn />}/>
                <Route path = '/register' element = {<Register />}/>
                <Route path = '/view-edit/:id' element = {<ViewEdit />}/>
                <Route path = '/create-novel' element = {<CreateNovel />}/>
                <Route path = '/novel-list' element = {<NovelList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;