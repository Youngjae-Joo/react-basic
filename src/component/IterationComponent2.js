import { useState } from "react";

const IterationComponent2 = () => {
    
    
    //1. 반복할 데이터(state로 관리)
    const arr = [
        { id: 1, topic: 'hello' },
        { id: 2, topic: 'bye' },
        { id: 3, topic: 'see you' },
    ];
    
    const [list, setList] = useState(arr);
    
    //2. map함수를 이용해서 li태그로 생성
    //key는 index 말고 다른 고유한 값을 사용하기
    //이벤트 안에서 함수를 호출로 연결하는 방법
    // 태그 안에서 익명함수를 만들고 익명함수 안에서 함수 호출()
    //onClick={()=>함수()}
    const newList = list.map(item =>
         <li key={item.id} onDoubleClick={()=>handleRemove(item.id)}>
            {item.topic}</li>)

    //3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = e => setData(e.target.value);
    
    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    const handleClick = e => {
        let obj = { id: list[list.length - 1].id + 1, topic: data }//list의 마지막 객체에 접근해서 그 아이디가 가진 값에 +1을 해준다.
        //list.push(obj); //불가. state를 직접 변경하면 안됨. 어차피 const라 안됨. 
        setList(list.concat(obj)); //원본 list를 수정하지 않고 list에 obj가 합쳐진 새로운 list반환하여 set으로 저장. state변경
        setData(''); //input값 비우기. 
    }
    
    //엔터키 처리
    const handlePress=(e)=>{
        if(e.keyCode===13) handleClick();
    }

    //5. 삭제기능
    /*
     화살표함수는 익명함수를 대체하기 때문에, 호이스팅이 불가능하다. 
     때문에 함수가 포함된 태그를 만들고 나서 화살표함수를 선언하는 것은 불가능하다.
    */
    //화살표함수로 만들고 싶으면 태그를 만들기 전, 위에 선언해야 한다.
    //또는, 태그 안에서 바로 만들면 된다.-> <li key={item.id} onDoubleClick={(e)=>e.target.remove()}>{item.topic}</li>
    //또는, 선언적 함수로 만든다.
    //또는,
    const handleRemove=(a)=>{
        //console.log(a); //삭제를 하기 위한 중요한 키

        //filter -콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        //더블클릭한 요소가 지워진 List를 set에 넣는다. state가 바뀌었으므로 리렌더링됨
        setList(list.filter(item=>item.id!==a));
    }
    
    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} onKeyUp={handlePress} value={data} />
            <button type="button" onClick={handleClick} >추가하기</button>
            <ol>
                {newList}
            </ol>
        </>
    )
}

export default IterationComponent2;