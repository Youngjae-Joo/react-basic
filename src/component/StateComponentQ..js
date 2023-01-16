import { useState } from "react";

const StateComponentQ = () => {


    //++count로 state를 직접 수정하면 안됩니다.
    const [count, setCount] = useState(0); //state, set state


    return (
        <>
            <hr />
            <h3>실습</h3>
            <div>카운트:{count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
                <button onClick={() => setCount(0)}>초기화</button>
            </div>

        </>
    )

}

export default StateComponentQ;