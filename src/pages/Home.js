import { useContext } from "react";
import { useEffect } from "react";
import { weatherContext } from "react";
import getWeather from "../API";

export default function Home() {
  useEffect(() => {
    getWeather();
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
