const myReducer = (state, action)=>{
    //action은 객체
    // console.log(state); //리듀서의 초기값
    // console.log(action); //업데이트에 필요한 정보
    if(action.type==='increase'){
        state={value:state.value+1}
    }else if(action.type==='decrease'){
        state={value:state.value-1}
    }else if(action.type==='reset'){
        state={value:0}

    }

    return state;
}

const nameReducer = (state, action) => {
    //console.log(action); //e.target. 즉 태그.

    state={...state,[action.name]:action.value}

    return state;
}

//기본디폴트 모형. export default는 하나밖에 반환 못함. 
//이 방식으로 하면 객체를 반환하고. 그 객체 안에는 함수만 있는 것.
export {myReducer, nameReducer};