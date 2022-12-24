import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddressPage from "./pages/AddressPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HistoryPage />} />
                <Route path="/history" element={<HistoryPage />} />

                <Route path="/address" element={<AddressPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
