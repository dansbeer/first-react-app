function CounterDisplay({ count }) {
  if (count >= 10) {
    count = "Done";
  }
  return <span style={{ fontSize: "20px" }}>{count}</span>;
}

export default CounterDisplay;