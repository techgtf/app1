import ErrPage from "./components/Error";
import ListingMain from "./components/appListingMount/ListingMain";
import HomePage from "./components/appMountPoint/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrPage />} />
        <Route path="/movieslist" element={<ListingMain />} />
      </Routes>
    </>
  );
}

export default App;