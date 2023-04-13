import { useState, useEffect } from "react";

import { ClockSection } from "./Taskbar.styled";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const cnewDate = () => {
      const curDate = new Date();

      setDate(curDate);
    };

    const timeOut = 1000 * 10; // Every 10s refresh the "Clock"

    const curTime = setInterval(cnewDate, timeOut);

    return () => {
      clearInterval(curTime);
    };
  }, []);

  if (!date) {
    return <p>Date is Invalid!</p>;
  }

  const formmatedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Tirane",
  });

  const getFormattedDate = (option) => {
    let formattedDate = null;

    if (option === "numeric") {
      const [month, day, year] = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear(),
      ];

      formattedDate = `${month}/${day}/${year}`;

      return formattedDate;
    }

    if (option === "long") {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      formattedDate = date.toLocaleDateString(undefined, options);
    }

    return formattedDate;
  };

  return (
    <ClockSection formattedDate={getFormattedDate("long")}>
      <div>{formmatedTime}</div>
      <div className="date">{getFormattedDate("numeric")}</div>
    </ClockSection>
  );
};

export default Clock;
