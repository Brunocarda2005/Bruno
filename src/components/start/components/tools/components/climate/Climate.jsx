import "./Climate.css";
import { SendDataClima } from "../../service/ClimateTime-service";
import { ConstClima } from "../../enum/ConstClima";
import { useState, useEffect } from "react";

export default function Clima() {
  const [stateClimate, setStateClimate] = useState(ConstClima.unknown);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SendDataClima("rosario");
      if (data) {
        console.log(data.stateClimate);
        setStateClimate(data.stateClimate);
        setTemperature(data.temperature);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="main__content-grid__container__clima">
      <div className="main__content-grid__container__clima__content">
        <span className="main__content-grid__container__clima__content__grado">
          {temperature}°
        </span>
        <img
          src={stateClimate}
          alt=""
          className="main__content-grid__container__clima__content__img"
        />
      </div>
      <div className="main__content-grid__container__clima__temp"></div>
    </section>
  );
}
