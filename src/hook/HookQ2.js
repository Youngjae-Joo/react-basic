import { useRef, useState } from "react";

const HookQ2 =()=>{

    /*
    실습(할일목록 만들기)
    1. state는 {todo:'',list:[]}로 관리하세요
    2. 할일 목록을 작성하고 클릭시, list에 인풋입력값을 추가하고 map을 통해서 화면을 그립니다.
    3. 등록버튼 클릭 이후에는 등록된 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.
    */

    const inputTag=useRef(null);

    const [data,setData]=useState({todo:'',list:[]})

    //인풋
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    //버튼
    const handleClick=()=>{
        if(inputTag.current.value===''){
            alert('값을 입력하세요');
        }else{
            setData({todo:'',list:data.list.concat(data.todo)})//concat은 새로운 배열을 반환하고, add나 push는 새로운배열을 반환하지 않는다.
        }
        inputTag.current.focus();   //concat은 문자열과 배열에 사용할 수 있다.
    }

    //그리기
    const lis= data.list.map((item,index)=><li key={index} onDoubleClick={(e)=>remover(e)}>{item}</li>);//state가 바뀌면 리렌더링된다.
    //이벤트에서 익명함수 선언하고 거기서 지우는 기능 있는 함수 호출. 이때, on~={}이 이벤트다! 그래서 이 위치에서 매개변수로 event객체를 주는 것이 가능
    
    //지우기
    const remover=(e)=>{
        e.target.remove();//태그 자체를 지우는 것. state를 지우는게 아님. 만약 li태그를 만들 때 innerHTML로 {index+1}을 넣으면 지울 때 순서가 그대로 남아 있다.
    }

    return(
        <div>
            <h3>ref로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" value={data.todo} ref={inputTag} onChange={handleChange}/>
            <button id="btn"onClick={handleClick}>등록하기</button>

            <ul>{lis}</ul>
        </div>
    )
}

export default HookQ2;