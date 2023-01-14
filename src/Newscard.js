import React , { useState } from 'react'

const Newscard = ({
urlToImage,
title,
content, 
description, 
publishedAt , 
author,
}) => {
    const [datan , setDetan] = useState([])

    return (
        <>
          
    <div >
    {
     datan.map((value) =>{
                  return (
                      <>
                          <div className='div1'key={value.content} >
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


export default Newscard