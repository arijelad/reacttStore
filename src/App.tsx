import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
function App() {
    return (

        <Router>
            <div className="flex min-h-screen w-full overflow-y-auto">
                <Sidebar className="w-1/4" />

                <div className="rounded w-1/2 flex justify-center flex-wrap">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                    </Routes>
                </div>

                <div className="w-1/4 flex flex-col">
                    <TopSellers />
                    <PopularBlogs />
                </div>
            </div>
        </Router>



    );
}

export default App;