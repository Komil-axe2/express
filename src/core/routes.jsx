import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import About from "../page/About";
import FoodById from "../page/[id]";
import PhotosById from "../page/photos/[id]";
import Photos from "../page/photos/photos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/store/:id" element={<FoodById />} />
        <Route path="photos" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotosById />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
