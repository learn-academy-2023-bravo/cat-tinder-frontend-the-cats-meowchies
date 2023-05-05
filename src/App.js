import React, { useState, useEffect } from "react"
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


// import mockCats from "./mockCats"

const App =() => {
  const [cats, setCats] = useState([])
  useEffect(()=>{
    readCats()
  },[])

  const readCats = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then(payload => {
      setCats(payload)
    })
    
    .catch((error => console.log(error)))
  }

  const createCat = (cats) => {
    fetch("http://localhost:3000/cats",{
      body: JSON.stringify(cats),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCats())
    .catch((errors) => console.log("Cat create errors:", errors))
  }
  const updateCat = (cats, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      
      body: JSON.stringify(cats),
     
      headers: {
        "Content-Type": "application/json"
      },
      
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readCats ())
      .catch((errors) => console.log("Cat update errors:", errors))
  }


  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route CatIndex path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />        
        <Route CatNew path="/catnew" element={<CatNew createCat={createCat} />} /> 
        <Route path="/catEdit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route NotFound path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
