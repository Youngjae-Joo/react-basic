
const IterationComponent=()=>{
    //반복처리
    const arr=[1,2,3,4,5];
    const newArr=arr.map((item,index,arr)=>item*10);
    console.log(newArr);

    //2. ...
    return(
        <>
            ...
        </>
    )
}

export default IterationComponent;