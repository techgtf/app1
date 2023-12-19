import ErrPage from "./components/Error";
import HomePage from "./components/appMountPoint/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrPage />} />
      </Routes>
    </>
  );
}

export default App;