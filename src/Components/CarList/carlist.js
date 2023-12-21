import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Carlist extends Component {
  state = {
    cars: [
      { id: 1, name: "Cobalt", color: "white", position: "2", price: "12000$", year: 2024, img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" /> },
      { id: 2, name: "Malibu", color: "black", position: "3", price: "40000$", year: 2025, img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" /> },
      { id: 3, name: "Damas", color: "blue", position: "1", price: "8000$", year: 2023, img: <img src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg" alt="Cabalt img" />},
    ],
  };

  render() {
    const { cars } = this.state;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Color</th>
              <th>Position</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.position}</td>
                  <td>{item.price}</td>
                  <td>
                      <Link to = {`/SingleCar/${item.id - 1}`} className="btn btn-primary" > See All </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
