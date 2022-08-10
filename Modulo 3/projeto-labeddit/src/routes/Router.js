import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignUpPage from "../pages/SignUpPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<LoginPage />} />
                <Route path='signup' element={<SignUpPage />} />
                <Route path="feed" element={<FeedPage />} />
                <Route path="post/:id" element={<PostDetailsPage />} />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;