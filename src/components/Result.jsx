import { useSelector } from "react-redux";

const Result = () => {
  const message = useSelector((state) => state.message);

  return <div>Le message: {message}</div>;
};

export default Result;
