import React from 'react'
import tagpost from './Tagpost'
import "./tagsec.css"

export default function Tagsection() {
  return (
    <div className='abouttag'>
    <h3>Tags</h3>
    <div className='tagnames' >
     { tagpost.map((data,index) => (
          <div className="tags" key={index}>
               <p style={index === 0 ? { color: 'white', backgroundColor: 'black' } : {}}>
            {data.content}</p>
          </div>
        ))}

    </div>

    </div>
  )
}
