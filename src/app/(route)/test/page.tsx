import React, { use } from "react";
import * as style from "./test.css";

// Next 12는 페이지 단위로 SSG, SSR등 렌더링 방식을 지정했다면 Next 13 이후부터는 컴포넌트 별로 렌더링 방식을 처리한다
// 즉 특정 컴포넌트 별로 SSR 지원이 가능하다.
async function getData(id: number) {
  const res = await fetch(`https://api.example.com/posts/${id}`);
  return res.json();
}

const index = () => {
  const post = use(getData(1));

  return <div className={style.container}>asdfas</div>;
};

export default index;
