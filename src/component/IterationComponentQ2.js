import { useState } from "react";

const IterationComponentQ2 = () => {
    //1-select태그는 컴포넌트 반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const opt = select.map((item, index) => <option key={index}>{item}</option>);

    //2-data는 state로 관리하고 화면에 li태그로 반복
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];
    const [copy, setCopy] = useState(data);
    const copyLi = copy.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>)

    const [lis, setLis] = useState(copyLi)

    //3. 셀렉트태그가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.
    const handleChange = (e) => {
        const list = copy.filter(item => item.type === e.target.value)
        setLis(list.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>))
        //또는
        // data전체로 li들을 만들어서 출력하고, copy에 data.filter를 해준 변수를 set으로 넣기만 해도 된다.
        // =>const list =data.filter(item=>item.type===e.target.value) -->이러면 data자체를 건드리는게 아님. data는 불변. 때문에 잘 작동한다.
        // copy에 필터를 걸면 한번 걸었을 때 나머지가 사라진다!!
        // =>setCopy(list)
        // 출력은 {copyLi}
    }

    //4. 검색 기능 만들기 - 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링
    const [search, setSearch] = useState('')
    const handelOnChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        const low = copy.filter(item => item.type.toLowerCase() === search.toLowerCase()||item.teacher.toLowerCase() === search.toLowerCase())
        setLis(low.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>))
    }

    const handlePress=(e)=>{
        if(e.keyCode===13) {
            handleClick();
           setSearch('')
        }
    }

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            <select onChange={handleChange}>
                {opt}
            </select>
            <br/>
            <input type="text" placeholder="Search..." onChange={handelOnChange} value={search} onKeyUp={handlePress} />
            <button onClick={handleClick}>검색</button>
            <ul>
                {lis}
            </ul>
        </>
    )
}

export default IterationComponentQ2;