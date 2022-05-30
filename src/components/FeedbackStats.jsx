import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // calculate ratings avg
  // let average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  
  // let average = Math.round(
  //   feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  // )
 

  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)
  // console.log(average)

  let arr = [];
  for (let i = 0; i < feedback.length; i++) {
    arr.push(feedback[i].rating)
  }

  let average = Math.round(
    arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  )
 

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats

