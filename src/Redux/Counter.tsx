import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

interface props {
  count: number;
}
const initialState: props = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count = -1;
    },
  },
});
const { increment, decrement } = counterSlice.actions;
const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>count: {initialState.count}</div>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default Counter;
