import { useState } from "react";


const EventComponent = () => {
    //name을 저장할 useState
    const [name, setName] = useState('');

    //이벤트함수의 첫번째 매개변수에 이벤트에 대한 정보를 넣어줍니다.
    //this는 함수형에서는 가능하지만 클래스형 컴퍼넌트에서는 사용어려움. ->event객체 사용
    const handleName = (e) => setName(e.target.value);//state체인지

    const [topic, setTopic] = useState('');
    const handleTopic = (e) => setTopic(e.target.value);

    //클릭이벤트
    const handleClick = () => {
        alert(`${name}님의 주제는 ${topic}입니다.`); //state값
        setName(''); //인풋데이터 초기화
        setTopic(''); //인풋데이터 초기화
    }

    //엔터키의 처리
    const handlePress = (e) => {
        if (e.keyCode === 13) {//엔터값
            handleClick();//클릭이벤트호출
        }
    }


    return (
        <>
            <h3>리액트의 이벤트 핸들링(인풋데이터)</h3>

            <input type="text" name="name" onChange={handleName} value={name} />
            <div>체인지된결과: {name}</div>
            <hr />
            <input type="text" name="topic" onChange={handleTopic} value={topic} onKeyUp={handlePress} />
            <div>체인지된결과: {topic}</div>
            <hr />
            <button type="button" onClick={handleClick}>클릭미</button>
        </>
    )
}

export default EventComponent;