import React, { useEffect, useRef, useState } from "react";

type Timerargs = {
  milisegundos: number;
};
export const Timer = ({ milisegundos }: Timerargs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  console.log(milisegundos);
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
    return () => {};
  }, [milisegundos]);
  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
