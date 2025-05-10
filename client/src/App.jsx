import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { asset } from "./assets/asset";
import Home from "./constaints/Home";
import CreatePost from "./constaints/Createpost";
const App = () => {
  return (
    <BrowserRouter>
      <header className="relative top-4">
        <Link className="w-full flux justify-between items-center bg-white sm:px-8 px-4" to="/">
          <img className="w-28 object-contain absolute left-5 top-0" src={asset.logo} alt="logo" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium top-0 bg-[#6469ff] text-white px-4 py-2 rounded-md mr-10 absolute Client right-0"
        >
          Create
        </Link>
      </header>
      <main className="relative top-10 sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} /> {/* ✅ Fixed */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

