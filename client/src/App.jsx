import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreDetail from "./components/StoreDetail";
import Update from "./components/StoreEditor"
import StoreForm from "./components/StoreForm"
import StoreList from "./components/StoreList"


const App = (props) => {
  const [stores, setStores] = useState([])

  return (

    <div>

      <BrowserRouter>
      
      <Routes>

        <Route element = {<StoreList stores = {stores} setStores = {setStores}/>} path = '/' default />

        <Route element = {<StoreForm stores = {stores} setStores = {setStores}/>} path = '/stores/add' />

        <Route element = {<StoreDetail/>} path = "/stores/:id"/>

        <Route element = {<Update/>} path = "stores/edit/:id"/>

      </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
