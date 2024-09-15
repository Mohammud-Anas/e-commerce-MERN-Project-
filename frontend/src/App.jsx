import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralRoutes from "./routes/GeneralRoutes.jsx";
import SellerRoutes from "./routes/SellerRoutes.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<GeneralRoutes />} />
          <Route path="/admin-pannel/*" element={<SellerRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
