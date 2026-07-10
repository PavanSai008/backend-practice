import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Feed from "./pages/Feed";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="create-post" element={<Upload />} />
        <Route path="post" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
