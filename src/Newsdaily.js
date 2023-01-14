import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";
import "./Syt.css";
const Newsdaily = () => {
  const [count, setCount] = useState("in");
  const [newsdata, setNewsdata] = useState({});
  const [datan, setDetan] = useState([]);
  const getnewsinfo = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${count}&apiKey=d3164f2b1e2e4ff2930b0e610a44df19`;
      const res = await fetch(url);
      const data = await res.json();
      const { urlToImage, title, content, description, publishedAt, author } =
        data.articles;
      setDetan(data.articles);
      // const myNewsdata1 = {
      //     urlToImage,
      //     title,
      //     content,
      //     description,
      //     publishedAt ,
      //     author,

      // };
      // setNewsdata(myNewsdata1)

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getnewsinfo();
  }, []);

  return (
    <>
      <div className="">
        <div className="div18">
          <input
            type="search"
            placeholder="search....."
            autoFocus
            id="search"
            className="div14"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <button type="button" className="div15" onClick={getnewsinfo}>
            Search
          </button>
        </div>
      </div>
      <div className="div 19">
        <div className="div2">
          <h4>type the code of the country you want to get headlines for.</h4>
          ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,
          jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,
          ua,us,ve,za .
        </div>
      </div>
      {/* <Newscard { ...newsdata } /> */}

      <div>
        {datan.map((value) => {
          return (
            <>
              <div className="div1">
                <img src={value.urlToImage} className="imge" alt="...." />
                <h4>{value.title}</h4>
                <p>{value.content}</p>
                <p>{value.description}</p>

                <h6 className="cls">{value.publishedAt}</h6>
                <h6 className="cls">{value.author}</h6>
                <p className="p2">
                  <a href={value.url}>click to knon more</a>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Newsdaily;
