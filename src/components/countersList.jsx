import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", prace: 100 },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 1, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const newCounters = counters.map((count) => {
      if (count.id === id) {
        count.value++;
      }
      return count;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((count) => {
      if (count.id === id && count.value > 0) {
        count.value--;
      }
      return count;
    });
    setCounters(newCounters);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    setCounters(newCounters);
  };

  const hendleReset = () => {
    setCounters(initialState);
    console.log("hendleReset");
  };

  const hendleUpdate = () => {
    // setCounters(updateState);
    console.log("hendleReset");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>
        Clear
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={hendleUpdate}>
        Update
      </button>
    </>
  );
};

export default CountersList;
