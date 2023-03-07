import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Car = string;

export default function CarsPage () {
  const user = useAuth(true);
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/cars").then(res => {
      setCars(res.data);
    });
  }, [navigate]);

  return !user ? null : (
    <div>
      <h1>Cars</h1>

      <ul>
        {cars.map(car => (
          <li key={car}>{car}</li>
        ))}
      </ul>
    </div>
  )
}