import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;