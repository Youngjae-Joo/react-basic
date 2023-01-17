
const IterationComponent = () => {

    //1. 반복처리
    const arr = [1, 2, 3, 4, 5];
    // const newArr=arr.map((item,index,arr)=>item*10);
    // console.log(newArr);

    //2. 반복처리(태그)
    // 리액트에서 태그반복처리시 key를 태그에 작성합니다.(key는 고유한 값입니다.)
    // key는 화면에서 렌더링할 때 변화를 감지하기 위해 참조하는 값입니다. 
    // 키는 화면에 나타나지 않는다. html이나 개발자도구에 나오지 않음.
    const newArr = arr.map((item, index) => <li key={index}>{item}</li>)
    return (
        <>
            <ul>
                {newArr}
                {/*
                {arr.map((item,index)=><li key={index}>{item}</li>)}
                 이렇게 한번에 넣기도 한다. */}
            </ul>

        </>
    )
}

export default IterationComponent;