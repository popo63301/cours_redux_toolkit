import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMessage } from "../store/messageSlice";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      input:{" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(updateMessage(inputValue))}>OK</button>
    </div>
  );
};

export default Input;
