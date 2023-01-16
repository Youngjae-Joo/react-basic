import { useState } from "react";

const EventComponentQ2 = () => {

    const [result, setResult] = useState({ content: '', content2: '' });

    const handleChange = (e) => {
        //content는 사용자의 입력값으로, content2는 유지
        setResult({content: e.target.value, content2:result.content2});
    }

    const handleClick = () => {
        //content는 공백, contetn2는 content값으로 변경
        setResult({content: '', content2: result.content });
    }

    //엔터키
    const handlePress=(e)=>{
        if(e.keyCode===13){
            handleClick();
        }
    }


    return (
        <>
            <hr />
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
            <p>힌트는? 아마도 state는 두개가 필요할듯?</p>
            <div>
                <input type="text" onChange={handleChange} value={result.content} onKeyUp={handlePress}></input>
                <button onClick={handleClick} >추가하기</button>
            </div>

            <h3>결과</h3>
            <div>{result.content2}</div>

        </>
    )
}

export default EventComponentQ2;