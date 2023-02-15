import { useDispatch, useSelector } from "react-redux";
import { asyncIncrement, counterLoading } from "../store/counterSlice";

const AsyncCounter = () => {
  // const loading = useSelector((state) => state.counter.loading);
  // const value = useSelector((state) => state.counter.value);

  const { loading, value } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: 150 }}>
      <div>La valeur du counter est: {value}</div>
      {loading === "pending" ? (
        "spinner ..."
      ) : (
        <button
          onClick={() => dispatch(asyncIncrement())}
          disabled={loading === "pending"}
        >
          increment async
        </button>
      )}
    </div>
  );
};

export default AsyncCounter;
