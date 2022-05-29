import React from 'react'
// import React, { useEffect, useState } from 'react'

function RatingSelect({ select, selected }) {
  // we don't need local state here as it's a duplicate of parent state
  // also no real need for useEffect or context

  // const [selected, setSelected] = useState(10)

  // useEffect(() =>{
  //   selected(feedbackEdit.item.rating)
  // },[feebbackEdit])

  const handleChange = (e) => {
    select(+e.currentTarget.value)
  }

  // simplified with iteration
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-S{i+1}`}>
          <input 
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect