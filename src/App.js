import { Fragment } from "react"
//css파일 경로 링크
import './css/App.css';

//css모듈 파일 링크
import styled from './css/App.module.css';


const App = () => {

    //p.261 -css스타일링
    //직접스타일링하기: -은 카멜표기법으로 변경됩니다.
    const myStyle={color:"aqua", textAlign:"center"}


    return (
        <Fragment>
            <header style={{backgroundColor:"teal"}} className="app_header">
                <p style={myStyle}>헤더입니다(직접스타일링)</p>
            </header>
            <article className="app_article"></article>
            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS디자인</p>
                    <input type="text" className="input_control"/>
                    <input  type="password" className="input_control"/>
                </div>
            </section>
        </Fragment>
    )
}

export default App;