
/*
 이미지를 가져오는 방법
 1. 외부 서버에서 경로를 참조받음(가장 일반적인 방법. 이미지가 너무 많으면 폴더안에 전부 넣기 어렵다)

 2. src폴더 밑에 img파일 참조가능(선호 x). import로 가져온다. 때문에 이미지가 많아지면 import를 엄청 해야 한다.
    import img2 from './../img/img2.png';로 가져오고 사용은 jsx문법으로 <img src={img2} alt="제목" width="100"/>
 3. public폴더 밑에 넣는 경우 이미지를 바로 참조 가능
    public폴더에 들어가면 http://localhost:3000/img/img1.png로 경로가 잡힌다.
    <img src="/img/img1.png" alt="제목" width="100"/>
    <img src={"/img/img1.png"} alt="제목" width="100"/>도 가능
    간단하고 자주 쓰는 이미지면 public폴더에 만들면 좋다.
*/

import { useState } from "react";

const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    const [data, setData] = useState(arr);

    const list = data.map((item) =>
        <div key={item.price} onClick={()=>{showImg(item.src)}}>{/* 이벤트 위임 가능 */}
            <img src={item.src} alt={item.title} width="100" />
            <p>상품:{item.title}</p>
            <p>가격:{item.price}</p>
        </div>);

//클릭시에 화면에 그려질 내용
    //1st
    const [content,setContent]=useState('')
    const showImg=(a)=>{
        const copy=<img src={a} alt="show" width="200"/>
        setContent(copy);

        //2nd
        // let show=document.querySelector("#content");
        // show.innerHTML=`<img src="${a}"/>`
    }

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>

            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
                <img src={img2} alt="제목" width="100"/>
                <img src={"/img/img1.png"} alt="제목" width="100"/> */}

            <div>{content}</div>
            {/*2nd <div id="content"></div> */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {list}
            </div>
        </>
    )
}

export default IterationComponentQ;