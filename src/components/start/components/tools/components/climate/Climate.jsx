import "./Climate.css";
import { SendDataClima } from "../../service/ClimateTime-service";
import { ConstClima } from "../../enum/ConstClima";
import { useState, useEffect } from "react";
import { useTranslation } from "../../../../../../utils/useTranslation";

export default function Clima() {
  const [stateClimate, setStateClimate] = useState(ConstClima.unknown);
  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await SendDataClima("rosario");

        if (data.success) {
          setStateClimate(data.stateClimate);
          setTemperature(data.climaString);
          setIsLoading(false);
          return;
        }

        setError(data.error || t("weather.error"));
        setStateClimate(ConstClima.unknown);
        setTemperature("--°");
      } catch (err) {
        setError(t("weather.connectionError"));
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <section className="main__content-grid__container__clima">
      <div className="main__content-grid__container__clima__content">
        <span className="main__content-grid__container__clima__content__grado">
          {isLoading ? "...°" : temperature}
        </span>
        <img
          src={stateClimate}
          alt={error ? t("weather.notAvailable") : t("weather.icon")}
          className="main__content-grid__container__clima__content__img"
          title={error || t("weather.current")}
        />
      </div>
      {error && (
        <div className="main__content-grid__container__clima__error">
          <small>{error}</small>
        </div>
      )}
    </section>
  );
}
