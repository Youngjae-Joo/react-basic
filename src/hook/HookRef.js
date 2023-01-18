import { useRef, useState } from "react";

const HookRef =()=>{
    //사용자 입력값 data, 화면에 출력값 result
    const [form,setForm]=useState({data:'',result:''})

    //인풋
    const handleChange=(e)=>{
        setForm({...form,["data"]:e.target.value})
    }

    //엔터키
    const handlePress=(e)=>{
        if(e.keyCode===13) handleClick();
    }

    //등록
    const handleClick=()=>{
        setForm({data:'',result:form.data})

        //Ref의 사용
        inputTag.current.focus();
    }


    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성을 넣습니다.
    const inputTag=useRef();
    //console.log(inputTag);//어떤 객체. 객체 안의 current는 지정하지 않으면 undefined, 지정하면 해당 태그로 바뀜


    return(
        <>
            내용: <input type="text" onChange={handleChange} onKeyUp={handlePress} value={form.data} ref={inputTag}/>
            <button type="button" onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )
}

export default HookRef;