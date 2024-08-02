// Hooks
import { useState, useEffect } from "react";

function useDate(): Date {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval: number = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return (): void => clearInterval(interval);
  }, []);

  return time;
}

export { useDate };
