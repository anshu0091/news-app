import React, { useState } from 'react'
import axios from 'axios'
import './Syt.css'

function News1 (){
 const [datan , setDetan] = useState([]) 
 

const News1 = () => {
axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d3164f2b1e2e4ff2930b0e610a44df19")
.then((Response) => {
  console.log(Response)  
setDetan(Response.data.articles)
})
} 
  return (
    <>
          <div>
    <button onClick={News1}>get news</button>
    
    </div>
    <div >
    {
     datan.map((value) =>{
                  return (
                      <>
                          <div className='div1'>
                              <img src={value.urlToImage} className='imge' alt="...." />
                              <div><h4>{value.title}</h4>
                                  <p>{value.content}</p>
                                  <p>{value.description}</p>

                                  <h6 className='cls'>{value.publishedAt}</h6>
                                  <h6 className='cls'>{value.author}</h6>
                                  <p className='p2'><a href={value.url} >click to knon more</a></p>
                              </div>
                          </div>
                      </>




                  )

     })
    }

    </div>
    </>
  )
}

export default News1