import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mercedes from "../../assets/mercedes-c.png";
import audi from "../../assets/audicar.png";
import lamborghini from "../../assets/lambo-c.png";
import bmw from "../../assets/bmw-c.png";
import calendar from "../../assets/calenda.png";
import "./index.css";

function Cars() {
  const navigate = useNavigate();

  const carModels = [
    { name: "Mercedes", img: mercedes, price: 50 },
    { name: "Audi", img: audi, price: 60 },
    { name: "BMW", img: bmw, price: 70 },
    { name: "Lamborghini", img: lamborghini, price: 120 },
  ];

  const [selectedCar, setSelectedCar] = useState(carModels[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  const handleBookNow = () => {
    if (!selectedDate) {
      alert("Please select a date first!");
      return;
    }

    navigate("/payment", {
      state: {
        car: selectedCar.name,
        amount: selectedCar.price * 100, // valor em centavos
        date: selectedDate,
      },
    });
  };

  return (
    <main className="main-content-cars">
      <div className="cars-title">
        <h2>Explore the world's largest car sharing & rental marketplace</h2>
        <p className="cars-subtitle">
          Rent the car you love for the best prices per week. Choose your model,
          select a date, and book instantly!
        </p>
      </div>

      {/* Date Picker e Dropdown */}
      <div className="cars-dropdown">
        {/* Seleção de data */}
        <div className="btn-date">
          <p>Date:</p>
          <button onClick={() => dateInputRef.current.showPicker()}>
            📅 {selectedDate ? selectedDate : "Select Date"}
          </button>
          <input
            type="date"
            ref={dateInputRef}
            style={{
              position: "absolute",
              opacity: 0,
              width: "1px",
              height: "1px",
              pointerEvents: "none",
            }}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Seleção de modelo */}
        <p>Model:</p>
        <button
          className="dropdown-button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedCar.name} — ${selectedCar.price}/week
        </button>

        {dropdownOpen && (
          <ul className="dropdown-list">
            {carModels.map((car, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCar(car);
                  setDropdownOpen(false);
                }}
              >
                {car.name} — ${car.price}/week
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Imagem do carro e preço */}
      <div className="cars">
        <img
          src={selectedCar.img}
          alt={selectedCar.name}
          style={{ width: "400px", height: "300px" }}
        />
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Price: ${selectedCar.price}/week
        </p>
      </div>

      {/* Botão Book Now */}
      <div className="book-now">
        <button onClick={handleBookNow}>
          <img src={calendar} alt="calendar" />
          Book Now
        </button>
      </div>
    </main>
  );
}

export default Cars;
