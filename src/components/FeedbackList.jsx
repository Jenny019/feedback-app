import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'
import Spinner from './shared/Spinner'

// add layout prop for nicer animation

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  console.log(feedback);

  // const feedbackData = JSON

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    // <div className='feedback-list'>
    //   <AnimatePresence>
    //     {feedback.map((item) => (
    //       <motion.div
    //         key={item.id}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         layout
    //       >
    //         <FeedbackItem key={item.id} item={item} />
    //       </motion.div>
    //     ))}
    //     </AnimatePresence>
    // </div>
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )

  // return (
  //   <div>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList