import { useState } from "react";

const StateComponent = () => {
    /*
    p.103
    state란 컴포넌트에서 변화하는 값을 의미합니다.
    state가 변경되면 컴포넌트를 리렌더링 시킵니다.
    함수형컴포넌트에서는 useState()를 사용합니다.
    */

    //1st
    // let data= useState('초기값')
    // console.log(data);
    // let a=data[0];
    // let b=data[1];

    //2nd
    let [data, setData] = useState('초기값');
    //console.log(data); //state값
    //console.log(setData); //state setter함수
    // data=1; //값만 바뀔 뿐, 화면이 리렌더링되는게 아니다. 나중에 오류 발생함
    // setData('변경할값') //err. Too many re-renders
    let func=()=>setData('변경');
    let enter=()=>setData('입장');
    let exit=()=>setData('퇴장');
        
    //state는 여러개 일 수 있습니다.
    let [color, setcolor] = useState('black');


    return (
        <>
            <h3 style={{'color':color}}>state값: {data}</h3>
            <button onClick={func}>값변경하기</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <hr/>
            <button onClick={()=>setcolor('red')}>붉은색</button>
            <button onClick={()=>setcolor('blue')}>푸른색</button>
            <button onClick={()=>setcolor('teal')}>그 사이 3초 그 짧은색</button>
        </>
    )
}

export default StateComponent;