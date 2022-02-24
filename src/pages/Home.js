import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { weatherContext } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [infoCity, setInfoCity] = useState({});
  const { register, handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("Paris");
  // 5e05e57090785df86ea12df5897b33c0
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ecd370db82f690a9b54ee06dfcce2c75&&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        setInfoCity(res);
        setIsLoading(false);
        console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [city]);
  // Pour changer le state et acceder à n'importe quelle ville
  const onSubmit = (data) => setCity(data.city);

  if (isLoading === true) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("city")} />

          <button type="submit">Search</button>
        </form>
        <p>Température : {infoCity?.list[0]?.main?.temp}°C</p>
        <p> Pays : {infoCity?.city?.country}</p>
        <p> Température minimum : {infoCity?.list[0].main.temp_min}</p>
        <p> Température minimum : {infoCity?.list[0].main.temp_max}</p>
      </div>
    </>
  );
}
