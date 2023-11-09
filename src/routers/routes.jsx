import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;