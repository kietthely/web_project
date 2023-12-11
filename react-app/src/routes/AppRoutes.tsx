import MergePDFs from "../pages/MergePDFs/index";
import PDFtoDocx from "../pages/PDFtoDocx/index";
import { Routes, Route } from "react-router-dom";

import App from "../App";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Services/MergePDFs" element={<MergePDFs />} />
      <Route path="/Services/PDFtoDocx" element={<PDFtoDocx />} />
    </Routes>
  );
};
export default AppRoutes;
