import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<LoginPage/>} />
            <Route path= "home" element = {<HomePage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    )
}