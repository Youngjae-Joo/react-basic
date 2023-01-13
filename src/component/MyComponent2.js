import { Fragment } from "react";
import '.././App.css'

const MyComponent2 =()=>{

    return(
        <Fragment>
        <h3>나의 두번째 컴포넌트</h3>
            <div className="App">
                <strong style={{fontStyle:'italic', color:'#777', marginLeft:100}}>컴포넌트는 여러개가 가능</strong>
                <p style={{color:'aqua', backgroundColor:'teal'}}>분할사용을 통해 필요하면 복사, 또는 각주처리가 가능</p>
            </div>
            <input type="text" placeholder="혼자쓰는태그는 닫아주기"/>
        </Fragment>
    )

}

export default MyComponent2;