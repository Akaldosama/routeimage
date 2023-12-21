import React, { Component } from "react";
import Login from "./Components/Login/login";
import Carlist from "./Components/CarList/carlist";
import SingleCar from "./Components/SingleCar/single";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Carlist" element={<Carlist />} />
          <Route path="SingleCar/:id" element={<SingleCar />} />
        </Routes>
      </div>
    );
  }
}
