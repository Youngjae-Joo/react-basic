import { useEffect, useRef, useState } from "react";

const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.

    2. id, pw는 state로 관리합니다
    로그인버튼 클릭시 공백이라면 공백인 태그에 포커슬를 주세요.
    로그인버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
    */
   const idFocus = useRef(null);
   const pwFocus = useRef(null);

    useEffect(() => {
        idFocus.current.focus(); //처음 마운트 이후 id태그에 포커싱
    }, [])

    const [data, setData] = useState({ id: '', pw: '' })

    //인풋태그의 핸들링
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    //버튼태그의 핸들링
    const handleClick = () => {
        if (idFocus.current.value === '') {
            alert('아이디를 입력하세요');
            idFocus.current.focus();//id태그
        } else if (pwFocus.current.value === '') {
            alert('비밀번호를 입력하세요');
            pwFocus.current.focus();//pw태그
        } else {
            alert(`아이디는 ${data.id}, 비밀번호는 ${data.pw}`)
            setData({ id: '', pw: '' })
        }
    }


    return (
        <div>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" ref={idFocus} value={data.id} onChange={handleChange} /><br />
            <input type="password" name="pw" placeholder="비밀번호" value={data.pw} ref={pwFocus} onChange={handleChange} /><br />
            <button onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;