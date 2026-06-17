import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { CaseDetails } from "../pages/CaseDetails/CaseDetails";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/cases/:slug"
                    element={<CaseDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}