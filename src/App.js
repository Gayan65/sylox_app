import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Normal layout */}
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <Home />
                            <Footer />
                        </>
                    }
                />

                {/* 404 Page (no NavBar or Footer) */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
