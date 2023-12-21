import React, { Component } from "react";
import './style.css'
export default class SingleCar extends Component {
  state = {
    cars: [
      {
        id: 1,
        name: "Cobalt",
        color: "white",
        position: "2",
        price: "12000$",
        year: 2024,
        img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" />
      },
      {
        id: 2,
        name: "Malibu",
        color: "black",
        position: "3",
        price: "40000$",
        year: 2025,
        img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" />
      },
      {
        id: 3,
        name: "Damas",
        color: "blue",
        position: "1",
        price: "8000$",
        year: 2023,
        img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" />
      },
    ],
  };
  render() {
    const { cars } = this.state;
    const url = window.location.href.split("/");
    let index = Number(url[4]);
    console.log(url[4]);
    return (
      <div className="card">
        <div className="card-header">
          <h1>About a Car</h1>
        </div>
        <div className="card-body">
          <h3>{`Car name: ${cars[index].name}`}</h3>
          <h3>{`Color: ${cars[index].color}`}</h3>
          <h3>{`Position: ${cars[index].position}`}</h3>
          <h3>{`Price ${cars[index].price}`}</h3>
          <h3>{`Car ${cars[index].year}`}</h3>
          <h3>{cars[index].img}</h3>
        </div>
      </div>
    );
  }
}
