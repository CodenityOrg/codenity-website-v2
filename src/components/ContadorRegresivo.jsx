'use client';

import { useEffect, useState } from "react";

export function ContadorRegresivo({ fecha }) {
  const MILI_SECONDS = 1000;
  const MILI_MINUTES = MILI_SECONDS * 60;
  const MILI_HOURS = MILI_MINUTES * 60;
  const MILI_DAYS = MILI_HOURS * 24;

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [dias, setDias] = useState(0);

  useEffect(() => {
    const DATE_TARGET = new Date(fecha.toString());
    const DURACION = DATE_TARGET - new Date();

    setDias(Math.floor(DURACION / MILI_DAYS));
    setHoras(Math.floor((DURACION % MILI_DAYS) / MILI_HOURS));
    setMinutos(Math.floor((DURACION % MILI_HOURS) / MILI_MINUTES));
    setSegundos(Math.floor((DURACION % MILI_MINUTES) / MILI_SECONDS));

    const intervalo = setInterval(() => {
      
      if (segundos <= 0 && minutos <= 0 && horas <= 0 && dias <= 0) {
        clearInterval(intervalo);
        return;
      }

      setSegundos(segundos - 1);
      // console.log(segundos);
      if (segundos === 0) {
        setSegundos(59);
        setMinutos(minutos - 1);
        if (minutos === 0) {
          setMinutos(59);
          setMinutos(horas - 1);
          if (horas === 0) {
            setHoras(23);
            setDias(dias - 1);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [segundos, minutos, horas, dias]);

  const formatearNumero = (numero) => numero.toString().padStart(2, "0");

  return (
    <div className="w-3/5 md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="grid grid-rows-2 gap-2 justify-items-center text-white ">
        <div className="text-5xl font-bold sm:text-6xl sm:font-normal md:text-7xl grid grid-cols-7 gap-2 justify-items-center">
          <span>{dias}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(horas)}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(minutos)}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(segundos)}</span>
        </div>
        <div className="text-sm grid grid-cols-7 gap-2 justify-items-center">
          <span>Días</span>
          <span></span>
          <span>Horas</span>
          <span></span>
          <span>Minutos</span>
          <span></span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
}
