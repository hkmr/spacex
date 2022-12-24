import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/ThemeSlice";

const CounterPage = () => {
    const count = useSelector((state) => {
        console.log(state);
        return state.counter.count;
    });

    const dispatcher = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatcher(action.increment())}>+</button>
            <button>-</button>
        </div>
    );
};

export default CounterPage;
