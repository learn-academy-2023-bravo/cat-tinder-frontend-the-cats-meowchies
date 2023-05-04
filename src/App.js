import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatEdit from "./pages/CatEdit"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css';
import { Routes, Route } from "react-router-dom"

import mockCats from "./mockCats"

const App =() => {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)
  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route CatIndex path="/catindex" element={<CatIndex cats={cats} />} />
        <Route CatShow path="/catshow" element={<CatShow cats={cats} />} />
        <Route CatNew path="/catnew" element={<CatNew/>} />
        <Route CatEdit path="/catEdit" element={<CatEdit/>} />
        <Route NotFound path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
