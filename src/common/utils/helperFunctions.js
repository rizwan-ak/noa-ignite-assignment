import data from "./data.json";

export const handleIncrement = (counter, setCounter) => {
  counter < data.repos.length - 1 ? setCounter(counter + 1) : setCounter(0);
};

export const handleDecrement = (counter, setCounter) => {
  counter > 0 ? setCounter(counter - 1) : setCounter(data.repos.length - 1);
};
